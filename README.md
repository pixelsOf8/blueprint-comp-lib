## Blueprint APP for custom components & libraries
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.


#### What's included:
The app is split into 2 sections:
- A default Angular CLi consisting of a single component for showcasing your built custom library / component
- A library folder containing it's own src / package.json / node_modules / modules etc... 


#### What's in the Angular APP:
Nothing special, its just a single page app (no pun intended!!) with a slot to load in your custom module


#### Starting the Angular APP:
Same as any other app.
Run `npm run start` from inside main `src` folder 


#### Key Library files:
A few important files to be aware of
- `public_api.ts` : The entry file for your library, any module or component part of the library you want made available needs to be exported in here!
- Your library `package.json` : Make sure your library name in here matches exactly your folder name under `/libs` or your create and push package scripts won't run properly 

***Please see documentation for more details about creating modules within a library***  


#### Hooking up the library:
- Open `app.module.ts` from inside the main app
- To import your chosen component you can use `import { ComponentName } from '../../libs/your-library-name';`

  NOTE:  
  - This needs to be at the same level as the `index.ts` within your library
  - This will now use the public_api.ts to find your component and load it in  

- Open `showcase.component.html` and insert your component in-between the comment tags `<my-component></my-component>`
- If you have a scss file you need as part of your library / component:
  - Open `/src/assets/sass/styles.scss` 
  - Add your import at the bottom (This is important for the theme to be able to inherit the library sass file)


#### Publishing the library:
NOTE:
- Run these scripts from within the Angular APP `package.json`
- Firstly run `npm run create-package` and follow the questions 
- Once the build finishes you'll notice another folder at root level of project called `built-libs`. If you open this and go inside src you should see all your code & scss
- To prepare the package ready to be published run `npm run prepare-package` and follow the commands 
- Once it's packaged up you'll notice a zipped version of your lib inside the `built-libs` folder
- Now it's time to publish:
  
  NOTE:
  - You will need an NPM login (or be a user on an account somewhere) to be able to push packages:
  
- Run `npm run push-package` and follow the commands
- When complete go to http://www.npmjs.com (login) and go to packages to see your published package.

#### Consuming your library: 
- Absolutely no difference to any other package you'd get from NPM
- Run `npm i package-name` or `npm i package-name --save-dev` will do the trick
- Then import into your module as normal and bish bash bosh your have access to your component (cool eh!!).

### Development server
Run `npm run start` for a dev server. Navigate to `http://localhost:6001/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
