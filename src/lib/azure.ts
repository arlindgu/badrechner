import { ClientSecretCredential } from "@azure/identity";

export function getAzureCredential() {
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;

    if (!tenantId) {
        throw new Error("AZURE_TENANT_ID fehlt in .env.local");
    }
    if (!clientId) {
        throw new Error("AZURE_CLIENT_ID fehlt in .env.local");
    }
    if (!clientSecret) {
        throw new Error("AZURE_CLIENT_SECRET fehlt in .env.local");
    }

    console.log("Azure Credential wird erstellt mit Tenant:", tenantId);

    return new ClientSecretCredential(tenantId, clientId, clientSecret);
}