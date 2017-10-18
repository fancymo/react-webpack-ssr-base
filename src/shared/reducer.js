const UPDATE_HEADER = 'UPDATE_HEADER';
const UPDATE_ITEM_LIST = 'UPDATE_ITEM_LIST';
const UPDATE_DATA_MAP = 'UPDATE_DATA_MAP';
const FILTER_QUERY_DATA = 'FILTER_QUERY_DATA';

// 请求头
export const header = (state = {
  // token: sessionStorage.token || null,
  useragent: 'k',
  os: '1',
  tenantid: '2597318629358407',
  device: '1'
}, action) => {
  switch (action.type) {
    case UPDATE_HEADER: {
      for (const key in action.data) {
        if (key) {
          state[key] = action.data[key];
        }
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

// 查询条件
export function queryData(state = {}, action) {
  switch (action.type) {
    case FILTER_QUERY_DATA: {
      return { ...state, ...action.data };
    }
    default:
      return state
  }
}

// 列表数据
export function itemList(state = [], action) {
  switch (action.type) {
    case UPDATE_ITEM_LIST: return action.data.map((item, index) => { return { ...item, key: index }; }); // react require property key
    default: return state;
  }
}

// 详情集合
export function dataMap(state = {}, action) {
  switch (action.type) {
    case UPDATE_DATA_MAP: return { ...state, ...action.data };
    default: return state;
  }
}

// 高阶 reducer 过滤器
export function createFilteredReducer(reducerFunction, reducerPredicate) {
  return (state, action) => {
    const isInitializationCall = state === undefined;
    const shouldRunWrappedReducer = reducerPredicate(action) || isInitializationCall;
    return shouldRunWrappedReducer ? reducerFunction(state, action) : state;
  }
}
