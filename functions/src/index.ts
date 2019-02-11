import {https} from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import {ContactApp} from './apps';
import * as bodyParser from 'body-parser';

const app = express();

app.use(cors({origin: '*'}));
app.use(bodyParser());

app.post('/', ContactApp);
app.options('*');

export const contact = https.onRequest(app);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
