import { combineReducers } from 'redux';
import  todos  from './reducer_todos';
import setVisibilityFilter from './reducer_visibility_filter.js';

const todoApp = combineReducers({
  todos,
  setVisibilityFilter
});

export default todoApp;
