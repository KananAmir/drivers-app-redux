import { combineReducers } from "redux";
import { driversReducer } from "./drivers.reducer";
import { favoriteDriversReducer } from "./favorites.reducer";

export default combineReducers({
    driversReducer,
    favoriteDriversReducer
})