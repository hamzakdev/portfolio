import {configureStore, combineReducers} from '@reduxjs/toolkit'
import allProjectsReducer from './allProjectsRedux'
import singleProjectReducer from './singleProjectRedux'






//Combining all the reducers into one
const rootReducer = combineReducers({
    projects: allProjectsReducer,
    project: singleProjectReducer,
    })

//creating a global store for state managemenet
export default configureStore({
    reducer:rootReducer
})
