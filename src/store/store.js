// May not need to use Vuex at this time. 02/27/2020

import Vue from 'vue';
import Vuex from 'vuex';
import VueMask from 'v-mask';

Vue.use(Vuex);
Vue.use(VueMask);

import home from './modules/home';

export const store = new Vuex.Store({
    modules: {
        home
    }
});