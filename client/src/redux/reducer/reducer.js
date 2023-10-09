// import { } from '../actions/index.js'
// import { nameASC } from '../../helpers/sort.js'
import {
  GET_WINES,
  GET_BY_NAME,
  GET_WINE_TYPE,
  SEARCH_WINE,
  CLEAN_STATE_BY_NAME,
  IS_OPEN,
  IS_OPEN_LIST,
  CLEAR_WINE_BY_NAME,
} from "../action/index.js";

const initialState = {
  wines: [],
  wineByName: [],
  wineType: [],
  searchWine: false,
  isOpen: false,
  isOpenList: false,
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
      case IS_OPEN_LIST:
      return {
        ...state,
        isOpenList: action.payload,
      };
      case GET_WINE_TYPE:
      return {
        ...state,
        wineType: action.payload,
      };
      case 'CLEAR_WINE_BY_NAME':
      return {
        ...state,
        wineByName: [],
        wineType: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
