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
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }
  return mailTransport;
}

export async function ContactApp(req: Request, res: Response) {

  /*
  Parameters:
  email: from email
  subject: subject
  phone
  text: content
  name: full name
   */

  const name = req.body.name;
  const message = req.body.text;
  const subject = req.body.subject;
  const email = req.body.email;
  const phone = req.body.phone;

  const mailbody =
    'Name: ' + name + '<br>'
    + 'Email: ' + email + '<br>'
    + 'Phone: ' + phone + '<br>'
    + 'Subject: ' + subject + '<br>'
    + 'Message: ' + message;

  // check request
  // validate honeypot / captcha
  const transport = await getOrCreateEmailTransport();
  // send email


  /*
  Mail composed to info@scytheofseraph.com
   */
  const options: SendMailOptions = {
    from: {
      name: 'Scythe of Seraph Contact Form',
      address: 'info@scytheofseraph.com'
    },
    to: 'info@scytheofseraph.com',
    subject: subject,
    html: mailbody
  };
  await transport.sendMail(options);

  /*
  Mail composed to form submitter
   */
  const userConfirmation: SendMailOptions = {
    from: {
      name: 'Scythe of Seraph Contact Form',
      address: 'info@scytheofseraph.com'
    },
    to: {
      address: email,
      name: name
    },
    subject: subject,
    html: `Dear ${name}<br><br>
Thank you for your message. We will get back to you shortly.<br>
You said:<br>
${message}`
  };
  await transport.sendMail(userConfirmation);

  res.status(204).send();

}
