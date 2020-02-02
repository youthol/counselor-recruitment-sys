import http from './base';

export default {
  login(params) {
    return http.post('/login', params);
  }
};
