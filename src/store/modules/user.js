import { LOADING, SUCCESS, FAIL } from '../status';
import types from '../mutation-types';
import userAPI from '@/api/user';

const {
  // users
  USERS,
  USERS_SUCCESS,
  USERS_FAILURE,
  // userinfo
  USERINFO,
  USERINFO_SUCCESS,
  USERINFO_FAILURE
} = types;

/**
 * 用户全局状态
 * userList 只在后台使用
 * userInfo 在前后台都能用到
 */
const state = {
  userList: [],
  userListStatus: '',
  userinfo: {},
  userinfoStatus: ''
};

const getters = {};

const mutations = {
  // users
  [USERS](state) {
    state.userListStatus = LOADING;
  },
  [USERS_SUCCESS](state, data) {
    state.userList = data;
    state.userListStatus = SUCCESS;
  },
  [USERS_FAILURE](state) {
    state.userListStatus = FAIL;
  },
  // userinfo
  [USERINFO](state) {
    state.userinfoStatus = LOADING;
  },
  [USERINFO_SUCCESS](state, data) {
    state.userinfo = data;
    state.userinfoStatus = SUCCESS;
  },
  [USERINFO_FAILURE](state) {
    state.userinfoStatus = FAIL;
  }
};

const actions = {
  async getUsers({ commit }) {
    try {
      commit(USERS);
      const res = await userAPI.getUsers();
      console.log(res);
      commit(USERS_SUCCESS, res);
      // if (res.success) {
      //   commit(USERS_SUCCESS, res);
      // } else {
      //   commit(USERS_FAILURE);
      // }
    } catch (e) {
      commit(USERS_FAILURE);
      throw e;
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
