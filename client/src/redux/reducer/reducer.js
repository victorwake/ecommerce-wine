// import { } from '../actions/index.js'
// import { nameASC } from '../../helpers/sort.js'
import {
  GET_WINES,
  GET_BY_NAME,
  SEARCH_WINE,
  CLEAN_STATE_BY_NAME,
  IS_OPEN,
} from "../action/index.js";

const initialState = {
  wines: [],
  wineByName: [],
  searchWine: false,
  isOpen: false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WINES:
      return {
        ...state,
        wines: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        wineByName: action.payload,
      };
    case SEARCH_WINE:
      return {
        ...state,
        searchWine: action.payload,
      };
    case CLEAN_STATE_BY_NAME:
      return {
        ...state,
        wineByName: (action.payload = []),
      };
      case IS_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
