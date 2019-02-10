"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const apps_1 = require("./apps");
const bodyParser = require("body-parser");
const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser());
app.post('/', apps_1.ContactApp);
exports.contact = firebase_functions_1.https.onRequest(app);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//# sourceMappingURL=index.js.map