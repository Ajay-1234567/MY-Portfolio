import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    // Simple trim to remove accidental whitespace
    const emailAddress = process.env.EMAIL_ADDRESS?.trim();
    const gmailPasskey = process.env.GMAIL_PASSKEY?.trim();

    if (!emailAddress || !gmailPasskey) {
      return NextResponse.json({
        success: false,
        message: "Env variables missing. Check Vercel settings."
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailAddress,
        pass: gmailPasskey,
      },
    });

    const mailOptions = {
      from: emailAddress,
      to: emailAddress,
      subject: `New Message from ${name} (${email})`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${userMessage}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">
            ${userMessage.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!"
    }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: false,
      message: `Failed to send email: ${error.message}`
    }, { status: 500 });
  }
}
