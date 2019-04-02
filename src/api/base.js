import axios from '@/utils/http';

export default {
  get(url, params, headers) {
    let options = {};
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.get(url, options);
  },
  post(url, data, params, headers) {
    let options = {};
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.post(url, data, options);
  },
  put(url, data, params, headers) {
    let options = {};
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.put(url, data, options);
  },
  delete(url, params, headers) {
    let options = {};
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.delete(url, options);
  }
};
