// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBinyS0vWW2v0oer5v1RJzDf8V-djlbnkE',
    authDomain: 'scythe-of-seraph-e7412.firebaseapp.com',
    databaseURL: 'https://scythe-of-seraph-e7412.firebaseio.com',
    projectId: 'scythe-of-seraph-e7412',
    storageBucket: 'scythe-of-seraph-e7412.appspot.com',
    messagingSenderId: '492029283880'
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
