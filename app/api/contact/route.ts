import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { bioData } from "@/data/bio";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, message." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || bioData.email;

    // DEV FALLBACK SIMULATION if RESEND_API_KEY is not configured
    if (!resend) {
      console.log(
        "\n========================================================================="
      );
      console.log("[RESEND API DEV FALLBACK] Contact Form Submission Received");
      console.log("=========================================================================");
      console.log(`From:    ${name} <${email}>`);
      console.log(`To:      ${recipientEmail}`);
      console.log(`Subject: [Portfolio Inquiry] New message from ${name}`);
      console.log(`Message: \n${message}`);
      console.log(
        "========================================================================="
      );
      console.log(
        "NOTE: Add RESEND_API_KEY to .env.local to enable real email delivery."
      );
      console.log(
        "=========================================================================\n"
      );

      return NextResponse.json({
        success: true,
        mode: "development-simulated",
        message: "Submission logged locally in dev fallback mode.",
      });
    }

    // REAL RESEND EMAIL DELIVERY
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `[Portfolio Inquiry] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[Resend API Error]:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: unknown) {
    console.error("[Contact API Exception]:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
