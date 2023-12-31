import axios from 'axios'

// const URL_API = import.meta.env.VITE_URL_API
const URL_API_ONLINE = import.meta.env.VITE_URL_API_ONLINE



export const getWines = () => {
    return async dispatch => {
      try {
        const response = await axios.get(`${URL_API_ONLINE}wines`)
        dispatch({
          type: GET_WINES,
          payload: response.data,
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const GET_WINES = 'GET_WINES'
  /*----------------------------------------------*/

export const getWinesByName = name => {
  return async dispatch => {
    try {
      const response = await axios.get(`${URL_API_ONLINE}wines/?name=${name}`)
      dispatch({
        type: GET_BY_NAME,
        payload: response.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_BY_NAME = 'GET_BY_NAME'
/*----------------------------------------------*/

export const changeSearchWine = payload => {
  return dispatch => {
    dispatch({ type: SEARCH_WINE, payload })
  }
}
export const SEARCH_WINE = 'SEARCH_WINE'
/*----------------------------------------------*/

export const cleanStateByName = payload => {
  return dispatch => {
    dispatch({ type: CLEAN_STATE_BY_NAME, payload })
  }
}
export const CLEAN_STATE_BY_NAME = 'CLEAN_STATE_BY_NAME'
/*----------------------------------------------*/

export const isOpenNavBar = payload => {
  return dispatch => {
    dispatch({ type: IS_OPEN, payload })
  }
}
export const IS_OPEN = 'IS_OPEN'
/*----------------------------------------------*/

export const openList = payload => {
  return dispatch => {
    dispatch({ type: IS_OPEN_LIST, payload })
  }
}
export const IS_OPEN_LIST = 'IS_OPEN_LIST'
/*----------------------------------------------*/

export const getWineType = type => {
  return async dispatch => {
    try {
      const response = await axios.get(`${URL_API_ONLINE}type?type=${type}`)
      dispatch({ type: GET_WINE_TYPE, payload: response.data })
      // dispatch(changeCurrentPage(1)) // actualiza el currentPage a 1
      // dispatch(cleanAllFilters()) // resetea los filtros
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_WINE_TYPE = 'GET_WINE_TYPE'

/*----------------------------------------------*/

export const clearWineByName = () => ({
  type: 'CLEAR_WINE_BY_NAME',
});
export const CLEAR_WINE_BY_NAME = 'CLEAR_WINE_BY_NAME'
/*----------------------------------------------*/


export const clearAllWine = () => ({
  type: 'CLEAR_ALL_WINE',
});
export const CLEAR_ALL_WINE = 'CLEAR_ALL_WINE'
/*----------------------------------------------*/

export const clearWineType = () => ({
  type: 'CLEAR_WINE_TYPE',
});
export const CLEAR_WINE_TYPE = 'CLEAR_WINE_TYPE'
/*----------------------------------------------*/

export const clearExperience = () => ({
  type: 'CLEAR_EXPERIENCE',
});
export const CLEAR_EXPERIENCE = 'CLEAR_EXPERIENCE'
/*----------------------------------------------*/

export const activeBtn = payload => {
  return dispatch => {
    dispatch({ type: BTN_ACTIVE, payload })
  }
}
export const BTN_ACTIVE = 'BTN_ACTIVE'
/*----------------------------------------------*/

export const wineTypeBtn = payload => {
    return dispatch => {
    dispatch({ type: WINE_TYPE_BTN, payload })
  }
}

export const WINE_TYPE_BTN = 'WINE_TYPE_BTN';
/*----------------------------------------------*/

export const inicioActive = payload => {
  return dispatch => {
    dispatch({ type: NAV_INICIO_ACTIVE, payload })
  }
}
export const NAV_INICIO_ACTIVE = 'NAV_INICIO_ACTIVE'
/*----------------------------------------------*/

export const getExperience = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${URL_API_ONLINE}experience`)
      dispatch({
        type: GET_EXPERIENCE,
        payload: response.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_EXPERIENCE = 'GET_EXPERIENCE'
/*----------------------------------------------*/

export const getTheme = payload => {
  return dispatch => {
  dispatch({ type: THEME_MODE, payload })
}
}

export const THEME_MODE = 'THEME_MODE';
/*----------------------------------------------*/

export const getTitle = payload => {
  return dispatch => {
  dispatch({ type: TITLE, payload })
}
}

export const TITLE = 'TITLE';
/*----------------------------------------------*/

/*----------------------------------------------*/

export const loginClose = payload => {
  return dispatch => {
    dispatch({ type: CLOSE_LOGIN, payload })
  }
}
export const CLOSE_LOGIN = 'CLOSE_LOGIN'