import {
  FETCH_CLIENT_LIST,
  REQUEST_CLIENT_LIST,
  REQUEST_CLIENT_LIST_SUCC,
  REQUEST_CLIENT_LIST_FAIL
} from './actions';

const defaultState = {
  pending: false,
  pager: {
    page: 1,
    size: 1,
    total: 0,
  },
  keyword: '',
  selectedMenus: [],
  fields: [],
  data: []
};

export default function clientReducer(state = defaultState, action) {

  switch (action.type) {
  case REQUEST_CLIENT_LIST:
    return { ...state, pending: true };
  case REQUEST_CLIENT_LIST_SUCC:
    return {
      ...state,
      pending: false,
      pager: action.data.pager,
      keyword: '',
      fields: action.data.fields,
      data: action.data.data
    };
  case REQUEST_CLIENT_LIST_FAIL:
    return { ...state, pending: false, err: action.err };
  default:
    return state;
  }
}
