// 用户数据相关API
import http from './base';

export default {
  // 这里为什么会有多个用户？
  // users
  getUsers(params) {
    return http.get('/users', params);
  },
  // user
  getUserInfo(id, params) {
    return http.get(`/user/${id}`, params);
  },
  updateUserInfo(id, params) {
    return http.put(`/user/${id}`, params);
  }
};
