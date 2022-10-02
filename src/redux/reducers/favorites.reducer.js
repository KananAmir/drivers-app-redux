export const favoriteDriversReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return [...state, action.payload]

        case 'REMOVE_DRIVER':
            return [...state.filter(driver => driver.driverId !== action.payload)]

        default:
            return state;
    }
}