//Imports
import Vue from "vue";

//Custom Imports
import App from "./App.vue";
import router from './router/router';
import store from './store/store';
import "./scss/main.scss";

//Config
Vue.use(store);

//Instanitiation
new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});