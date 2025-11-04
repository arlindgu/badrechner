"use server";

import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import { getAzureCredential } from "./azure";

export async function sendEmail(
    to: string,
    subject: string,
    body: string
) {
    try {
        console.log("Starte E-Mail-Versand zu:", to);

        if (!process.env.AZURE_TENANT_ID || !process.env.AZURE_CLIENT_ID || !process.env.AZURE_CLIENT_SECRET) {
            throw new Error("Azure-Umgebungsvariablen fehlen");
        }

        const mailFrom = process.env.AZURE_MAIL_FROM;
        if (!mailFrom) {
            throw new Error("AZURE_MAIL_FROM fehlt in .env.local");
        }

        const credential = getAzureCredential();
        console.log("Azure Credential erstellt");

        const authProvider = new TokenCredentialAuthenticationProvider(credential, {
            scopes: ["https://graph.microsoft.com/.default"],
        });
        console.log("Auth Provider erstellt");

        const client = Client.initWithMiddleware({ authProvider });
        console.log("Graph Client initialisiert");

        const message = {
            subject: subject,
            body: {
                contentType: "HTML",
                content: body,
            },
            toRecipients: [
                {
                    emailAddress: {
                        address: to,
                    },
                },
            ],
        };

        console.log("Message Objekt erstellt, sende E-Mail von:", mailFrom);

        // Verwende /users/{email}/sendMail statt /me/sendMail
        const result = await client
            .api(`/users/${mailFrom}/sendMail`)
            .post({
                message: message,
                saveToSentItems: true,
            });

        console.log("E-Mail erfolgreich versendet:", result);
        return { success: true };
    } catch (error) {
        console.error("Fehler beim E-Mail-Versand:", error);
        if (error instanceof Error) {
            console.error("Error Message:", error.message);
            console.error("Error Stack:", error.stack);
        }
        throw error;
    }
}