import {https} from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import {ContactApp, thumbnailGenerator} from '../../src/apps';
import * as bodyParser from 'body-parser';

const contactApp = express();

contactApp.use(cors({origin: '*'}));

contactApp.post('', bodyParser(), ContactApp);
contactApp.options('', cors({origin: '*'}));

export const contact = https.onRequest(contactApp);

export const thumbnails = thumbnailGenerator;

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
