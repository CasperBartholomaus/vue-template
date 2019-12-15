//Imports
import Vue from 'vue';
import Vuex from 'vuex';

//Custom Imports
import home from './modules/home';

//Config
Vue.use(Vuex);

//Store
export default new Vuex.Store({
    modules: {
        home,
    }
})
