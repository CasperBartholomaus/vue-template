# Vue-Template:

A Vue setup with Vuex, Jest, ESLint & Webpack

## Folder structure:
### Vue
- src/components: place to store all your vue components
- src/public: here stays the index.html
- src/router/router: initialize the router
- src/router/routes: literally the routes (paths)
- src/App.vue: Main element
- src/main.js: Initialize the project
### Vue Store 
- src/store/store: initialize the store
- src/store/modules: submodules for the store 
### SCSS
- src/scss/abstracts:  helper files, variables, functions, mixins
- src/scss/base: holds the boilerplate code for the project
- src/scss/components: holds all of your styles for buttons, sliders
- src/scss/layout: header, footer, navigation and the grid system
- src/scss/pages: styles specific to individual pages
- src/scss/vendors: external libraries and frameworks
### Test
- test/components: unit-test for vue componenets
- test/utils: unit-test for utils functions
### Configuration
- .babelrc.js: set preset-env
- .eslintrc.js: configuration for linting
- jest.config.js: configuration for jest framework
- webpack: configuration webpack for build and run