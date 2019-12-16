//Imports
import Vue from "vue";
import VueMaterial from 'vue-material'

//Custom Imports
import App from "./App.vue";
import router from './router/router';
import store from './store/store';
//CSS Imports
import "./scss/main.scss";
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

//Config
Vue.use(store);
Vue.use(VueMaterial);

//Instanitiation
new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});