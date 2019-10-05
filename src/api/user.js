import http from './base';

export default {
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
