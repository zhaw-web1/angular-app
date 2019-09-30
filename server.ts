import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import {join} from 'path';
import * as cookieParser from 'cookie-parser';
import {https} from 'firebase-functions';
import {ContactApp, thumbnailGenerator} from './src/apps';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const ssrApp = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
ssrApp.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));


ssrApp.set('view engine', 'html');
ssrApp.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
ssrApp.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

ssrApp.use('*', cookieParser());

// All regular routes use the Universal engine
ssrApp.get('*', (req, res) => {
  res.render('index', { req, res });
});

export const ssr = https.onRequest(ssrApp);

const contactApp = express();

contactApp.use(cors({origin: '*'}));

contactApp.post('', bodyParser(), ContactApp);
contactApp.options('', cors({origin: '*'}));

export const contact = https.onRequest(contactApp);

export const thumbnails = thumbnailGenerator;

