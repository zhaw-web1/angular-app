import {https} from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import {ContactApp, NotFoundApp, thumbnailGenerator} from './apps';
import * as bodyParser from 'body-parser';

const app = express();

app.use(cors({origin: '*'}));

app.post('', bodyParser(), ContactApp);
app.options('', cors({origin: '*'}));

export const contact = https.onRequest(app);

export const thumbnails = thumbnailGenerator;

const notFoundApp = express();

notFoundApp.use(cors({origin: '*'}));

notFoundApp.post('', bodyParser(), NotFoundApp);
notFoundApp.options('', cors({origin: '*'}));

export const notFound = https.onRequest(notFoundApp);


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
