# Scythe of Seraph Project

The project uses Angular (7.x) and Firebase. Firestore connection credentials for the application are provided in the environment variable file. 

As these are generally available through debugging the application in a web browser (client side credentials), these will not be protected any further.

The project uses Travis-CI to automatically build any pull request or push to the project.  
In the case of builds on the master branch, the application also publishes the application to firebase hosting.  
The credentials used in pushing the application this way are stored securely using travis-ci secure environment variables.

## Preparing for local development

The application needs the following dependencies to run locally:

- Run `npm install` in the base application directory to install dependencies
- Run `npm install -g @angular/cli` to install the newest version of the angular cli globally

## Running locally
Run `ng serve --aot` to run the project locally with ahead-of-time compilation. 

The default interface used is localhost (127.0.0.1), the default port used is 4200:
- [localhost:4200](http://localhost:4200)

SSL is disabled by default.

You can change the port used using `--port [port]` and the interface using `--host [host]`.

- e.g.: `ng serve --aot --port 80 --host 0.0.0.0` (needs SU access on linux) to listen on all interfaces on port 80.

## Project Structure

The project is structured as follows:

- `src`: project source
  - `app`: application wrapper
    - `component`: module containing components for the application
    - `core`: core services and guards the app can't work without

## Testing
Run `ng test` to start run of all the tests.

With `ng test --code-coverage` you can create the code coverage of the tests. Then run this command to show the results `http-server -c-1 -o -p 9875 ./coverage`.
