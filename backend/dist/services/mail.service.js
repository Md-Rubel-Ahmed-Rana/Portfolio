"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailServices = void 0;
const envConfig_1 = require("../config/envConfig");
const nodemailer_1 = __importDefault(require("nodemailer"));
class Service {
    send(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const transporter = nodemailer_1.default.createTransport({
                service: process.env.GMAIL_SERVICE,
                host: process.env.GMAIL_HOST,
                port: parseInt(process.env.GMAIL_PORT, 10),
                secure: true,
                auth: {
                    user: process.env.GOOGLE_USER,
                    pass: process.env.GOOGLE_APP_PASSWORD,
                },
            });
            const info = yield transporter.sendMail({
                from: `${content.sender.name} <${content.sender.email}>`,
                to: process.env.GOOGLE_USER,
                subject: content.title,
                html: content.body,
            });
            return info.messageId;
        });
    }
    feedbackMail(name, designation, email, feedback) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield this.send({
                title: "Feedback Posted",
                sender: { email: process.env.GOOGLE_USER, name },
                body: htmlContent,
            });
        });
    }
    sendFeedbackDashboardMail(name, email, dashboardUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f7;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .header {
      padding: 24px;
      background-color: #4f46e5;
      color: #ffffff;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
    }
    .content {
      padding: 24px;
      font-size: 16px;
      line-height: 1.6;
    }
    .button {
      display: inline-block;
      background-color: #4f46e5;
      color: #ffffff;
      padding: 12px 24px;
      margin: 20px 0;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
    }
    .footer {
      padding: 16px;
      font-size: 13px;
      text-align: center;
      color: #888;
      background: #f4f4f7;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Your Feedback Dashboard</h1>
    </div>
    <div class="content">
      <p>Hi ${name},</p>
      <p>Thank you for sharing your valuable feedback!</p>
      <p>You can now access your submitted feedbacks securely by clicking the button below:</p>
      <p style="text-align:center;">
        <a style="color:white;" href="${dashboardUrl}" class="button" target="_blank">View My Feedbacks</a>
      </p>
      <p>This link is valid for the next <strong>24 hours</strong> only. For your security, please do not share this link with anyone.</p>
      <p>If you didn’t request this email, you can safely ignore it.</p>
      <p>Best regards,<br/>The Team</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Md Rubel Ahmed Rana. All rights reserved.
    </div>
  </div>
</body>
</html>
    `;
            const transporter = nodemailer_1.default.createTransport({
                service: process.env.GMAIL_SERVICE,
                host: process.env.GMAIL_HOST,
                port: parseInt(process.env.GMAIL_PORT, 10),
                secure: true,
                auth: {
                    user: process.env.GOOGLE_USER,
                    pass: process.env.GOOGLE_APP_PASSWORD,
                },
            });
            const info = yield transporter.sendMail({
                subject: "My Feedback Dashboard",
                from: `${name} <${process.env.GOOGLE_USER}>`,
                to: email,
                html: htmlContent,
            });
            console.log(info);
            return;
        });
    }
    sendEmail(subject, to, htmlContent, bcc, cc) {
        const transporter = nodemailer_1.default.createTransport(envConfig_1.envConfig.gmail);
        const mailOptions = {
            from: `CMS - Md Rubel Ahmed Rana <${envConfig_1.envConfig.gmail.auth.user}>`,
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
            }
            else {
                console.log({ mailInfo: info });
            }
        });
    }
    resetPasswordLink(receiver, resetUrl) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.MailServices = new Service();
