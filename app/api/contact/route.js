import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    const emailAddress = process.env.EMAIL_ADDRESS;
    const gmailPasskey = process.env.GMAIL_PASSKEY;

    if (!emailAddress || !gmailPasskey) {
      return NextResponse.json({
        success: false,
        message: "Env variables missing. Check Vercel settings."
      }, { status: 500 });
    }

    // Use specific SMTP settings for better reliability
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
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
    // Return the actual error message to the client for easier debugging
    return NextResponse.json({
      success: false,
      message: `Failed: ${error.message}`
    }, { status: 500 });
  }
}
