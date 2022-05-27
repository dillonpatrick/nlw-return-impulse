import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9b68ecc63c6395",
    pass: "efd7917be1ec5d",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendmail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <cliente@feedget.com>",
      to: "Dillon Patrick <admin@feedget.com>",
      subject,
      html: body,
    });
  }
}
