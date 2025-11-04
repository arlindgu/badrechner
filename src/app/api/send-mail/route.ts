import { sendEmail } from "@/lib/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        console.log("API Route: /api/send-mail aufgerufen");

        const body = await request.json();
        console.log("Request Body erhalten:", body);

        const { to, subject, body: emailBody } = body;

        if (!to || !subject || !emailBody) {
            return NextResponse.json(
                { error: "Fehlende Parameter (to, subject, body)" },
                { status: 400 }
            );
        }

        await sendEmail(to, subject, emailBody);

        return NextResponse.json(
            { success: true, message: "E-Mail versendet" },
            { status: 200 }
        );
    } catch (error) {
        console.error("API Route Fehler:", error);

        const errorMessage = error instanceof Error
            ? error.message
            : "Unbekannter Fehler beim E-Mail-Versand";

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}