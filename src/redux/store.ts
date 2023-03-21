import {create} from "domain";
import {createStoreHook} from "react-redux";
import {combineReducers, legacy_createStore } from "redux";
import {counterReducer} from "./counter-reducer";


const rootReducer= combineReducers({
    counter:counterReducer
})



export const store = legacy_createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

const storeTest = store
