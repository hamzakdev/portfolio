import { createSlice } from "@reduxjs/toolkit";


const allProjectsSlice = createSlice({
    name:"Projects",
    initialState:{
        projects:[],
        isFetching:false,
        error:false
    },
    reducers:{
        getAllProductsStart:(state)=>{
            state.isFetching = true
        },
        getAllProductsSuccess:(state,action)=>{
            state.isFetching = false
            state.projects = action.payload
            state.error = false

        },
        getAllProductsFailure:(state,action)=>{
            state.isFetching = false
            state.error = action.payload
        },
    }
        
})
export const {getAllProductsStart, getAllProductsSuccess, getAllProductsFailure} =    allProjectsSlice.actions
export default allProjectsSlice.reducer