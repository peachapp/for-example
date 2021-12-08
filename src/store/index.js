import { combineReducers, createStore } from 'redux';
import * as reducer from './reducer';

const reducers = combineReducers({
  ...reducer
});

const store = createStore(reducers); // 传入reducers

export default store; // 导出仓库