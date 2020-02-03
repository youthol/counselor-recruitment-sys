import types from '../mutation-types';
import { LOADING, SUCCESS, FAIL } from '../status';
// import accountApi from '../../api/account';

const state = {
  isLogin: false,
  loginStatus: ''
};

const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = types;

const getters = {};

const mutations = {
  [LOGIN](state) {
    state.loginStatus = LOADING;
  },
  [LOGIN_SUCCESS](state) {
    state.loginStatus = SUCCESS;
    state.isLogin = true;
  },
  [LOGIN_FAILURE](state) {
    state.loginStatus = FAIL;
  },
  [LOGOUT](state) {
    state.loginStatus = false;
    state.isLogin = false;
  }
};

const actions = {
  async login({ commit }, formData) {
    try {
      commit(LOGIN);
      // const res = await accountApi.login(formData);
      // console.log(res);
      commit(LOGIN_SUCCESS);
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
