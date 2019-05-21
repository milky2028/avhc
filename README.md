# avhc
Aspen Valley Hemp Company

This project uses yarn (instead of npm) for package mangagement, currently version 1.14.0 (as of February 2019).

I'm deprecating this section. Just do the regular install from the Yarn website, as I haven't seen a need yet to manage versions with YVM yet. Only use YVM is you don't have root access.

Install yarn with [yvm (Yarn Version Manager)](https://yvm.js.org/docs/overview). YVM requires node > v8, zip, and unzip. Zip and unzip are included by default on Ubuntu and OSX, but need to be installed on Debian, do so with:

```
sudo apt install zip unzip
```
Then:
```
yvm install 1.14.0
yvm use 1.14.0
yvm set-default 1.14.0

# Check yarn version once installed
yarn -v
```

If encountering issues when installing yarn via yvm, make sure to use:

```
source ~/.yvm/yvm.sh
```

In the past, I've had issues getting this up and running with a node version greater than 8 (something to do with node-sass). If you encounter this issue, just use node 8. Install node 8 using [nvm (Node Version Manager)](https://github.com/creationix/nvm).

```
nvm install 8
nvm use 8
nvm alias default 8

# Check node and npm versions to make sure everything is working
node -v && npm -v
```

After installing node, you need [Vue CLI 3](https://cli.vuejs.org/) and [Firebase](https://firebase.google.com/docs/cli/).

```
npm i -g firebase-tools @vue/cli @vue/cli-service-global
```

After that, clone the project, install node modules with yarn, and you're good to go.

```
git clone https://github.com/milky2028/avhc.git
cd avhc/public
yarn install
yarn serve
```
You can also use Vue CLI 3's GUI to serve, build, and manage the project. The build page has super valuable insights into performance.

```
vue ui
```

Vue UI is still in beta, I believe, and is sometimes buggy. If the page shows up blank, try to manually navigate to http://localhost:8000/dashboard.

The [Vue Devtools extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) for Chrome is essential!

The root folder contains a build script, but is written specifically to work on my machine.

# Project Details
This project uses:

* Vue

   Scaffolded with Vue CLI 3. Also uses Babel for additional polyfills. Make sure to get the following extensions for VS Code:
   * Vetur
   * TSLint (the old TypeScript extension was recently deprecated, make sure to get the one that lists Microsoft as its publisher)
   * TSLint for Vue
   * ESLint
   * Debugger for Chrome

* Vue Class Component Syntax

   Vue's Class Component syntax is more similar to Angular and React, in that it uses classes. Vue's object-based syntax is simple and easy to learn, but it differs from most of what the JS world is doing at this time, so I decided to go with the class-based syntax. When the core Vue project hits version 3.0.0, class-based syntax will become the default, which is cool because I didn't know that when I started this project. Having said that, as of now (Feb 2019) help for the class-based syntax can be somewhat harder to find online. Definitely suggest reading up on these two pages to become familiar [Vue TypesScript Example](https://github.com/vuejs/vue-class-component/blob/master/example/src/App.vue) and [Vue Class Component Main Page](https://github.com/vuejs/vue-class-component).

* [Vuex](https://vuex.vuejs.org/)

  Vuex Modules:
  * Products
  * User
  * Cart
  * Order
  
* TypeScript
  
  TypeScript support is made easier using the class-based syntax. Vue does not have great TypeScript support at this time, something that's said to change with the release of Vue 3.0.0. Angular-like decorators are used. I would describe the extent to which I'm using TypeScript as moderate? TypeScript is running in strict mode, which means noImplicitAny and strictNullChecks are both in use. "No implicit any" is helpful, but "strict null checks" are mostly just semi-annoying at this time. It's still sort of helpful. I'm not typing out every single thing, but I am manually writing types for a decent amount of stuff. TypeScript support is lacking significantly in Vuex.
  Sometimes Intellisense doesn't work great in VS Code (specifically on OSX) with type-checking code in Vue components. If this is the case, disable the Vetur, TSLint for Vue, and TSLint extensions, then restart VS Code, then renable all the extensions, then restart again.
  
* Firebase
  
  * Currently using Firestore and Firebase Auth. The firestore package is way too big, but it's what we're using anyways. The auth package is considerably smaller.
  
* Firebase Cloud Functions
  
  * Code for Firebase Functions is under the functions folder, front-end code is under the public folder. Both folders have their own package.json and node_modules, which should probably be unified at some point. Cloud Functions also use TypeScript. Firebase Cloud Fucntions include Express by default.

* Sentry Error Reporting
* SASS

# TODOs and Caveats

* The primary form factor target for this site is mobile (specifically iPhone 6/7/8 and iPhone X).
  
  After the Rolling Stone article, 80% of traffic was mobile. Simulate responsive sizes with Chrome devtools.
  
* Cloud functions for post-order processing

   * Add order to Shopify
   * Send confirmation email (rely on Shopify for this?)
   * Get payment for order via Fortress

* ~Swich from localStorage to IndexedDB via idb-keyval~
* Start using IMGIX as a image server?
* Performance timing with the Performance Timings API
* Page to view single orders
* ~Test results page~
* Change app color scheme?
* Page to edit default user account info

   * Use container view template
   
* h2 server push
   
   * Need custom build steps for this
   * Edit firebase.json at build time? Is this a bad idea?
   
* PWA install prompt on orders page
* ~Add orders to database.~
* ~Validate order fields on order placement~
* ~Field Error handler~
* ~Orders page displays actual orders (is dummy order now)~
* ~Fix checkout page since Vuex reintegration.~
* ~Finish policy pages~

   * ~Terms and Conditions~
   * ~Privacy Policy~
   * ~Return Policy~
   
* Order tracking with Google Tag Manager and Google Analytics
* User permission levels with Firebase Custom Claims.

   * Wholesale users that can place wholesale orders using wholesale orders if their custom claim specifies as such.
   
* Database security rules. VERY IMPORTANTTTTTTTTTTTTTT.
* All desktop styles need to be redone and componentized. I don't like them as they are now, and they're not reusable
* Better user cues and interactions for most things, loaders, etc.

   * ~Tap states for buttons~
   * Animations for arrows in selectors
   
* Full article for about page. Currently has dummy content.
* Slide to delete from cart on cart page
* Notifications
* Proper pre-production staging environment
* As I get more components, the folder structure is bad. Better folder structure.
* "Order it again" functionality for repeating past orders, sort of like Domino's Pizza.
* Animations!
* ~Prerendering~
   
   * ~/about~
   * ~/terms-and-conditions~
   * ~/return-policy~
   * ~/privacy-policy~
   * ~/test-results~
   * ~/ I don't think it's possible to prerender the home page~
   
* CMS (probably Butter) integration to allow other people to create orders and such (further off).
   
   * Butter does not let you use your own custom backend; need to find a different solution
   * Might be able to use a headless CMS like Wordpress, then fire a cloud function from a webhook that updates data in cloud firestore
  
* Migrate theme.scss files to vars.scss
* Payment Request API
  
  * Rethinking this one since Google changed how this works with Google Pay. Support just might not be there yet.
  
# Bugs

* Add button does not work on Firefox
* ~City not correctly autofilling in Chrome~
* Buy button stays highlighted on mobile after pressing it in its previous state to add to cart
