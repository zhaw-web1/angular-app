import {https} from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import {ContactApp, thumbnailGenerator} from './apps';
import * as bodyParser from 'body-parser';

const app = express();

app.use(cors({origin: '*'}));

app.post('', bodyParser(), ContactApp);
app.options('', cors({origin: '*'}));

export const contact = https.onRequest(app);

export const thumbnails = thumbnailGenerator;

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
