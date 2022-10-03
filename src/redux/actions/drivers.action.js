import axios from "axios"

let baseUrl = 'https://ergast.com/api/f1/drivers.json';

export const getAllDriversAction = () => {
    return async (dispatch) => {
        dispatch({
            type: 'GET_DRIVERS_START',
        })
        axios.get(baseUrl)
            .then(result =>
                dispatch({
                    type: 'GET_DRIVERS_SUCCESS',
                    payload: result.data
                }))
            .catch(error => {
                dispatch({
                    type: 'GET_DRIVERS_FAIL',
                    payload: error
                })
            })
    }
}

export const addToFavoritesAction = (driver) => {
    return {
        type: 'ADD_TO_FAVORITES',
        payload: driver
    }
}

export const removeDriverAction = (id) => {
    return {
        type: 'REMOVE_DRIVER',
        payload: id
    }
}