import { combineReducers } from "redux";
import { loginReducer } from './loginReducer'
import { favoritesReducer } from './favoritesReducer'


const rootReducer = combineReducers({
    login: loginReducer,
    favorites: favoritesReducer
})

export {rootReducer}