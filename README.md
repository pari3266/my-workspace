I write this library for test publish a library in npm

## Creating libraries and publish in npm

https://angular.dev/tools/libraries/creating-libraries#publishing-libraries

Remove the 'private' field from the package.json to publish it.

for use this library :
npm i parisa-test@0.0.1

## If we want use verdaccio for publish library
https://verdaccio.org/docs/what-is-verdaccio/

npm login --registry=http://localhost:4873

https://imhazige.medium.com/use-verdaccio-to-publish-npm-package-to-a-local-repository-d086f11bc3fb

## To define the version for publishing libraries in npm,
 you typically specify the version number in the package.json file of your project. The version number follows Semantic Versioning (SemVer) guidelines, which consist of three numbers separated by dots: major.minor.patch.

Here’s how you can define the version for publishing libraries in npm:

Major Version: Increment the major version when you make incompatible API changes.

Example: 1.0.0

Minor Version: Increment the minor version when you add functionality in a backward-compatible manner.

Example: 1.1.0

Patch Version: Increment the patch version when you make backward-compatible bug fixes.

Example: 1.1.1

To define the version in your package.json file, follow these steps:

Open your project’s package.json file.
Locate the version field within the file.
Update the version number to the desired value following SemVer guidelines.
Save the package.json file.
Here is an example of how the version field looks in a package.json file:

json
{
  "name": "my-library",
  "version": "1.0.0",
  "description": "Description of your library...",
  ...
}
After updating the version number in the package.json file, you can use the npm publish command to publish your library to the npm registry with the specified version. Remember that once you publish a version of your library, subsequent versions must have a higher version number following SemVer rules to ensure proper versioning and dependency management.


# MyWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

