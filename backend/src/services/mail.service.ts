import SMTPTransport from "nodemailer/lib/smtp-transport";
import { envConfig } from "../config/envConfig";
import { IMail } from "../interfaces/mail.interface";
import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";

class Service {
  async send(content: IMail): Promise<string> {
    const transporter: Transporter = nodemailer.createTransport({
      service: process.env.GMAIL_SERVICE,
      host: process.env.GMAIL_HOST,
      port: parseInt(process.env.GMAIL_PORT as string, 10),
      secure: true,
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const info: SentMessageInfo = await transporter.sendMail({
      from: `${content.sender.name} <${content.sender.email}>`,
      to: process.env.GOOGLE_USER,
      subject: content.title,
      html: content.body,
    });

    return info.messageId;
  }

  async feedbackMail(
    name: string,
    designation: string,
    email: string,
    feedback: string
  ) {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 40px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin-top: 0; color: #333;">📩 New Feedback Received</h2>
              <p style="color: #555;">You have received new feedback from:</p>
  
              <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                <tr>
                  <td style="font-weight: bold; color: #333;">Name:</td>
                  <td style="color: #555;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #333;">Designation:</td>
                  <td style="color: #555;">${designation}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #333;">Email:</td>
                  <td style="color: #555;">${email}</td>
                </tr>
              </table>
  
              <div style="margin-top: 30px;">
                <p style="font-weight: bold; color: #333;">Feedback:</p>
                <blockquote style="margin: 10px 0; padding: 15px; background-color: #f1f1f1; border-left: 4px solid #007acc; color: #333; border-radius: 4px;">
                  ${feedback}
                </blockquote>
              </div>
  
              <p style="color: #888; font-size: 12px; margin-top: 40px;">This is an automated message. Please do not reply directly.</p>
            </td>
          </tr>
        </table>
      </div>
    `;

    return await this.send({
      title: "Feedback Posted",
      sender: { email: process.env.GOOGLE_USER as string, name },
      body: htmlContent,
    });
  }

  private sendEmail(
    subject: string,
    to: string | string[],
    htmlContent: string,
    bcc?: string[],
    cc?: string[]
  ) {
    const transporter = nodemailer.createTransport(envConfig.gmail);

    const mailOptions: SMTPTransport.Options = {
      from: `CMS - Md Rubel Ahmed Rana <${envConfig.gmail.auth.user}>`,
      to: to,
      subject: subject,
      html: htmlContent,
    };

    if (bcc) {
      mailOptions.bcc = bcc;
    }

    if (cc) {
      mailOptions.cc = cc;
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log({ mailError: error });
      } else {
        console.log({ mailInfo: info });
      }
    });
  }

  async resetPasswordLink(receiver: string, resetUrl: string) {
    const content = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Reset Your Password</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 10px 5px;">
          <table width="100%" cellspacing="0" cellpadding="0">
              <tr>
                  <td align="center">
                      <table width="600px" style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px #cccccc;">
                          <tr>
                              <td align="center" style="padding: 10px;">
                                  <h2 style="color: #333333;">🔒 Password Reset Request</h2>
                                  <p style="color: #555555; font-size: 16px;">Hello,</p>
                                  <p style="color: #555555; font-size: 16px;">We received a request to reset your password. Click the button below to reset your password.</p>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" style="padding: 10px;">
                                  <a href="${resetUrl}" style="background-color: #007BFF; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">🔑 Reset Password</a>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" style="padding: 10px;">
                                  <p style="color: #555555; font-size: 14px;">This link will expire in <strong>10 minutes</strong>. If you did not request a password reset, you can safely ignore this email.</p>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </body>
      </html>
    `;

    this.sendEmail("Reset Your Password", receiver, content);
  }
}

export const MailServices = new Service();
