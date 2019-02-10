import {Request, Response} from 'express';
import {createTestAccount, createTransport, TestAccount, SendMailOptions} from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';

type Account = TestAccount;

let mailAccount: Account = null;
let mailTransport: Mail = null;

async function getOrCreateEmailAccount() {
  if (!mailAccount) {
    mailAccount = await createTestAccount();
  }
  return mailAccount;
}

async function getOrCreateEmailTransport(account: Account): Promise<Mail> {
  if (!mailTransport) {
    mailTransport = await createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass // generated ethereal password
      }
    });
  }
  return mailTransport;
}

export async function ContactApp(req: Request, res: Response) {


  // check request
  // validate honeypot / captcha

  const account = await getOrCreateEmailAccount();
  const transport = await getOrCreateEmailTransport(account);
  // send email

  const options: SendMailOptions = {
    from: req.body.email,
    to: `contact@scytheofseraph.com,${req.body.email}`,
    subject: req.body.subject,
    text: req.body.text
  };

  await transport.sendMail(options)

}
