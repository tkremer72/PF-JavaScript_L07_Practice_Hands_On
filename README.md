# L07 Practice Hands On

# Directions
For your Lesson 7 Practice Hands-On, you will be practicing your new Routing skills. This Hands-On will not be graded, but we encourage you to complete it. The best way to become a great programmer is to practice! Once you have submitted your project, you will be able to access the solution on the next page.

Caution!
Before continuing, if you have an Angular application running, be sure to stop the server using Ctrl + C!

Setup
Start off by downloading the starter project and unzipping it. The starter project will be in a folder named angular-L7-handson.

Starter Project

After unzipping, move the starter project folder to the FEFAngular folder located inside the FullStackWeb folder and rename it from angular-L7-handson to L07HandsOn.

Open up your terminal/command prompt.

Run the following to navigate to your Desktop

cd Desktop
Next, navigate to the FullStackWeb directory in your terminal.

cd FullStackWeb
Then, navigate to the FEFAngular directory in your terminal.

cd FEFAngular
Navigate into the L07HandsOn directory:

cd L07HandsOn
Now that you are in the L07HandsOn directory, run the following:

npm install
Next, run the following:

npm install typescript@2.8 --save-dev
Requirements
For this project, you will be adding Routing to a provided project.

Step 1
Open the L07HandsOn project in VS Code and start the server with ng serve --open. You will only see the following:

beginning

Run the necessary command using Angular's CLI tool that will install Angular routing at the base level of your project.

Hint! This command is located towards the beginning of this lesson.

Currently, this project has 3 separate components which are not being rendered. Within the routing module, add the necessary code for routing through the following components:

HomeComponent
AboutComponent
AlbumsComponent
Within the routing module, add the necessary values within the imports and exports arrays.

Each of the above components have either images, information, or both. Add a navigation bar to the base component's HTML file which routes to each of the above components using the designated path.

Hint! The path was determined during the first bullet point.

Style the navigation bar to your liking.

Lastly, be sure to add the necessary component to the base component's HTML to allow for the use of routing.

Example
When finished, your project should look similar to the following:

Home page:

l7 handsonHome

About page:

l7 handsonAbout

Albums page:

l7 handsonAlbums

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
