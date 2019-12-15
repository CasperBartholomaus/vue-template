//Imports
import Vue from 'vue';
import Router from 'vue-router';

//Custom Imports
import routes from './routes'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes,
})

