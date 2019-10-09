import { FETCH_POSTS, NEW_POST } from '../action/type.js'

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {

    // console.log("action payloade-->",action);
    
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state, 
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}