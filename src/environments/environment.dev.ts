// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCC0w859rf_4b3_btkJgN12mvzcTZiHeEE',
    authDomain: 'scythe-of-seraph-dev.firebaseapp.com',
    databaseURL: 'https://scythe-of-seraph-dev.firebaseio.com',
    projectId: 'scythe-of-seraph-dev',
    storageBucket: 'scythe-of-seraph-dev.appspot.com',
    messagingSenderId: '231399054623',
    appId: '1:231399054623:web:ccb13d3969265e07e7642a'
  },
  api: 'https://us-central1-scythe-of-seraph-dev.cloudfunctions.net'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
