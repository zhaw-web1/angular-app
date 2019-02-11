import {Request, Response} from 'express';
import {createTransport, SendMailOptions} from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';
import {config} from 'firebase-functions';

let mailTransport: Mail = null;

async function getOrCreateEmailTransport(): Promise<Mail> {
  if (!mailTransport) {
    mailTransport = await createTransport({
      host: config().mail.smtp,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config().mail.user,
        pass: config().mail.pass
      }
    });
  }
  return mailTransport;
}

export async function ContactApp(req: Request, res: Response) {


  // check request
  // validate honeypot / captcha
  const transport = await getOrCreateEmailTransport();
  // send email

  console.log(`new contact invocation from ${req.body.email}`);
  console.log(`sending from ${config().mail.user}`);

  const options: SendMailOptions = {
    from: {
      name: 'Scythe of Seraph Contact Form',
      address: 'info@scytheofseraph.com'
    },
    to: 'info@scytheofseraph.com',
    subject: req.body.subject,
    text: req.body.text
  };
  await transport.sendMail(options);

  const userConfirmation: SendMailOptions = {
    from: {
      name: 'Scythe of Seraph Contact Form',
      address: 'info@scytheofseraph.com'
    },
    to: req.body.email,
    subject: req.body.subject,
    text: `
    Thank you for your message. We will get back to you shortly.
    You said:
    ${req.body.text}
    `
  };
  await transport.sendMail(userConfirmation);

  res.status(204).send();

}
