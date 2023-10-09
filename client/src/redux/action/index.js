import axios from 'axios'

const URL_API = import.meta.env.VITE_URL_API
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
      const response = await axios.get(`${URL_API}type?type=${type}`)
      dispatch({ type: GET_WINE_TYPE, payload: response.data })
      dispatch(changeCurrentPage(1)) // actualiza el currentPage a 1
      dispatch(cleanAllFilters()) // resetea los filtros
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