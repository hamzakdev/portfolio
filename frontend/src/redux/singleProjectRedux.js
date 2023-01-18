import { createSlice } from "@reduxjs/toolkit";


const singleProjectSlice = createSlice({
    name:"Project",
    initialState:{
        project:[],
        isFetching:false,
        error:false
    },
    reducers:{
        getSingleProjectStart:(state)=>{
            state.isFetching = true
        },
        getSingleProjectSuccess:(state,action)=>{
            state.isFetching = false
            state.project = action.payload
            state.error = false

        },
        getSingleProjectFailure:(state,action)=>{
            state.isFetching = false
            state.error = action.payload
        },
    }
        
})
export const {getSingleProjectStart, getSingleProjectSuccess, getSingleProjectFailure} =    singleProjectSlice.actions
export default singleProjectSlice.reducer