import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import user from './modules/user';
import login from './modules/login';
import baseinfo from './modules/baseinfo';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    user,
    login,
    baseinfo
  },
  plugins: debug ? [createLogger()] : []
});
