import axios from '../../utils/axios';

export const getVideoList=async()=>{
    const response=await axios.get('/videos');
    return response.data;
}
export const createVideo=async(data)=>{
    const response=await axios.post('/videos',data);
    return response.data;
}
export const updateVideo=async(id,data)=>{
    const response=await axios.put(`/videos/${id}`,data);
    return response.data;
}
export const deleteVideo=async(id)=>{
    const response=await axios.delete(`/videos/${id}`);
    return response.data;
}