// 三种状态值
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

export function checkLoading(status) {
  return LOADING === status;
}

export function checkSuccess(status) {
  return SUCCESS === status;
}
