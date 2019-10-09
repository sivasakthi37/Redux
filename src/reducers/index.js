import { combineReducers } from 'redux';
import postReducer from './postReducer';
import { reducer as reduxFormReducer } from 'redux-form';


export default combineReducers({
  posts: postReducer,
  form: reduxFormReducer
});
