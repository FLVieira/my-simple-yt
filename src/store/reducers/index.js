import { combineReducers } from 'redux';

import searchVideo from './searchVideo';
import playVideo from './playVideo';

const rootReducer = combineReducers({
  searchVideo,
  playVideo,
});

export default rootReducer;
