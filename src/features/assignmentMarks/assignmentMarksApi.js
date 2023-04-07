import axios from "../../utils/axios";

export const getMarksList=async()=>{
    const response=await axios.get('/assignmentMark');
    return response.data;
}
export const createMark=async()=>{
    const response=await axios.post('/assignmentMark');
    return response.data;
}
export const updateMark=async(id,data)=>{
    const response=await axios.put(`/assignmentMark/${id}`,data);
    return response.data;
}
export const deleteMark=async()=>{
    const response=await axios.post('/assignmentMark');
    return response.data;
}