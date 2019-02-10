"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
let mailAccount = null;
let mailTransport = null;
function getOrCreateEmailAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!mailAccount) {
            mailAccount = yield nodemailer_1.createTestAccount();
        }
        return mailAccount;
    });
}
function getOrCreateEmailTransport(account) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!mailTransport) {
            mailTransport = yield nodemailer_1.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false,
                auth: {
                    user: account.user,
                    pass: account.pass // generated ethereal password
                }
            });
        }
        return mailTransport;
    });
}
function ContactApp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // check request
        // validate honeypot / captcha
        const account = yield getOrCreateEmailAccount();
        let transport = yield getOrCreateEmailTransport(account);
        // send email
        const options = {
            from: req.body.email,
            to: `contact@scytheofseraph.com,${req.body.email}`,
            subject: req.body.subject,
            text: req.body.text
        };
        yield transport.sendMail(options);
    });
}
exports.ContactApp = ContactApp;
//# sourceMappingURL=contact.js.map