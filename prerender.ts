// Load zone.js for the server.
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { join, resolve } from 'path';
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

import { enableProdMode } from '@angular/core';

// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { renderModuleFactory } from '@angular/platform-server';

import * as fs from 'fs-extra';

// Add routes manually that you need rendered
const ROUTES = [
  '/',
  '/news',
  '/matches',
  '/contact',
  '/about-us',
  '/imprint',
  '/404',
  '/staff',
  '/teams'
];

const APP_NAME = 'webapp';

// leave this as require(), imported via webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist/${APP_NAME}-server/main`);

enableProdMode();


async function prerender() {
  // Get the app index
  const browserBuild = `dist/${APP_NAME}`;
  const index = await fs.readFile(join(browserBuild, 'index.html'), 'utf8');


  // Loop over each route
  for (const route of ROUTES) {
    console.log(`Rendering ${route}`);
    const pageDir = join(browserBuild, route);
    await fs.ensureDir(pageDir);

    // Render with Universal
    console.log('Rendering...');
    const html = await renderModuleFactory(AppServerModuleNgFactory, {
      document: index,
      url: route,
      extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
    });
    console.log('Rendered.');

    await fs.writeFile(join(pageDir, 'index.html'), html);
    console.log(`Wrote ${route}.`);
  }

  console.log('done rendering :)');
  process.exit();
}

prerender().then(() => console.log('Done.')).catch(err => console.log(err));
