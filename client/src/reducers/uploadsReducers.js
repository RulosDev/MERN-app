import { ADD_FILE, CHANGE_FILE, GET_FILES} from '../types/uploadsTypes';
import { changeFile } from '../actions/uploadsActions';
const INITIAL_STATE = {
  files: [],
  loading: false,
  uploadsfiles: [],
  error: ''
}

export default (state= INITIAL_STATE, action)=>{
  switch(action.type) {
   
    case ADD_FILE:
      return {
        ...state,
        files: [action.payload, ...state.files]
      };
    case CHANGE_FILE:
        return {
          ...state,
          files:[action.payload, ...state.files]
        }
    case GET_FILES:
      return {
        ...state,
        uploadsfiles: action.payload,
      }
    default:
      return state;
  }
}


