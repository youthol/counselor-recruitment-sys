import types from '../mutation-types';
import { LOADING, SUCCESS, FAIL } from '../status';
// import accountApi from '../../api/account';

const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SET_LOGIN } = types;

const state = {
  isLogin: false, // 用于全局导航守卫
  loginType: '',
  loginStatus: ''
};

const getters = {};

// FIXME: 只针对某一端调试
const mutations = {
  [LOGIN](state, payload) {
    state.loginStatus = LOADING;
    // ...
  },
  [LOGIN_SUCCESS](state, payload) {
    state.loginStatus = SUCCESS;
    state.isLogin = true;
    state.loginType = payload;
    localStorage.setItem('login', JSON.stringify(state));
  },
  [LOGIN_FAILURE](state, payload) {
    state.loginStatus = FAIL;
  },
  [LOGOUT](state) {
    state.loginStatus = false;
    state.isLogin = false;
    state.loginType = '';
    localStorage.setItem('login', JSON.stringify(state));
  },
  [SET_LOGIN](state, payload) {
    state = Object.assign(state, payload);
  }
};

const actions = {
  /**
   * submitInfo有两个属性：
   * 1. type: 用来区分 client 和 admin
   * 2. data: 表单数据
   * @param {*} param0
   * @param {*} submitInfo
   */
  async login({ commit }, submitInfo) {
    try {
      commit(LOGIN);
      // const res = await accountApi.login(formData);
      // console.log(res);
      commit(LOGIN_SUCCESS, submitInfo.type);
    } catch (error) {
      commit(LOGIN_FAILURE);
      throw error;
    }
  },
  async logout({ commit }) {
    commit(LOGOUT);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
