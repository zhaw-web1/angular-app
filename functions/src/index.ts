import {https} from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import {ContactApp, thumbnailGenerator} from './apps';
import * as bodyParser from 'body-parser';

//import { ngExpressEngine } from '@nguniversal/express-engine';

import { renderModuleFactory } from '@angular/platform-server';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import {template} from '@angular/core/src/render3';
//import { ValueProvider } from '@angular/core';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/webapp/main.bundle');

const app = express();

app.use(cors({origin: '*'}));

app.post('', bodyParser(), ContactApp);
app.options('', cors({origin: '*'}));

export const contact = https.onRequest(app);

export const thumbnails = thumbnailGenerator;

app.engine('html', (_, options, callback) => {
  const opts = {
    document: template,
    url: options.req.url,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP),
      {
        provide: REQUEST,
        useValue: options.req
      },
      {
        provide: RESPONSE,
        useValue: options.req.res,
      },
    ]
  };

renderModuleFactory(AppServerModuleNgFactory, opts)
  .then(html => callback(null, html)
);
});


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
