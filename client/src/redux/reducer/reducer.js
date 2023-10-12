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
  CLEAR_ALL_WINE,
  CLEAR_WINE_TYPE,
  CLEAR_EXPERIENCE,
  BTN_ACTIVE,
  WINE_TYPE_BTN,
  NAV_INICIO_ACTIVE,
  GET_EXPERIENCE
} from "../action/index.js";

const initialState = {
  wines: [],
  wineByName: [],
  wineType: [],
  searchWine: false,
  isOpen: false,
  isOpenList: false,
  navInicio: false,
  btnActive: false,
  wineBtnType: '',
  experience: [],
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
        wineByName: (action.payload = []),
      };
      case 'CLEAR_ALL_WINE':
        return {
          ...state,
          wines: (action.payload = []),
      };
      case 'CLEAR_WINE_TYPE':
        return {
          ...state,
          wineType: (action.payload = []),
        };
        case 'CLEAR_EXPERIENCE':
        return {
          ...state,
          experience: (action.payload = []),
        };
          case BTN_ACTIVE:
      return {
        ...state,
        btnActive: action.payload,
      };
      case WINE_TYPE_BTN:
      return {
        ...state,
        wineBtnType: action.payload,
      };
      case NAV_INICIO_ACTIVE:
      return {
        ...state,
        navInicio: action.payload,
      };
      case GET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };
      
    default:
      return state;
  }
};

export default rootReducer;
