import { getAllProductsFailure, getAllProductsStart, getAllProductsSuccess } from "../redux/allProjectsRedux"
import axios from 'axios'
import { getSingleProjectFailure, getSingleProjectStart, getSingleProjectSuccess } from "../redux/singleProjectRedux"


//GET ALL PROJECTS
export const getAllProjects =async (dispatch)=>{
try{
    
    dispatch(getAllProductsStart())
    const {data} = await axios.get('http://localhost:5000/projects')
    dispatch(getAllProductsSuccess(data))

}catch(err){
    dispatch(getAllProductsFailure(err))


}
    
}

//GET SINGLE PROJECT
export const getSingleProject =async (dispatch, id)=>{
try{
    
    dispatch(getSingleProjectStart())
    const {data} = await axios.get(`http://localhost:5000/projects/${id}`)
    dispatch(getSingleProjectSuccess(data))

}catch(err){
    dispatch(getSingleProjectFailure(err))


}
    
}