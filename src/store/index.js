/**
 * vuex主文件
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import user from './modules/user';
import login from './modules/login';
import baseinfo from './modules/baseinfo';

Vue.use(Vuex);

/**
 * 这里用来判断运行时所在的环境
 * debug 为true 表示在开发环境
 * debug 为false 表示在生产环境
 */
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    user,
    login,
    baseinfo
  },
  // Logger 为内置的日志插件
  plugins: debug ? [createLogger()] : [],
  // 是否打开浏览器的vue调试工具
  devtools: debug
});
