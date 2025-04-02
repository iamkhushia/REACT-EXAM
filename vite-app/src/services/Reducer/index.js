import { combineReducers } from "redux";
import { recipeReducer } from "./recipeReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({ 
    recipeReducer,
    userReducer
})