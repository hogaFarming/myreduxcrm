import * as api from './api/client';

export const FETCH_CLIENT_LIST = 'FETCH_CLIENT_LIST';
export function fetchClientList({ page, size }) {
  return function(dispatch) {
    requestClientList();
    
    return api.getListData(page, size)
      .then((fields, data, total) => {
        dispatch(requestClientListSucc({
          fields,
          data,
          pager: {
            page,
            size,
            total
          },
        }));
      }, err => {
        dispatch(requestClientListFail(err));
      });

  };
}

export const REQUEST_CLIENT_LIST = 'REQUEST_CLIENT_LIST';
export function requestClientList() {
  return {
    type: REQUEST_CLIENT_LIST
  };
}

export const REQUEST_CLIENT_LIST_SUCC = 'REQUEST_CLIENT_LIST_SUCC';
export function requestClientListSucc(data) {
  return {
    type: REQUEST_CLIENT_LIST_SUCC,
    data: data
  };
}

export const REQUEST_CLIENT_LIST_FAIL = 'REQUEST_CLIENT_LIST_FAIL';
export function requestClientListFail(err) {
  return {
    type: REQUEST_CLIENT_LIST_FAIL,
    err: err
  };
}
