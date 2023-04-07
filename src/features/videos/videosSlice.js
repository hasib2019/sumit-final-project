import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideoList,createVideo,deleteVideo,updateVideo } from "./videosApi";
//initial state
const initialState={
    videos:[],
    isLoading:false,
    isError:false,
    error:"",
    editingObj:{},
}

//async thunk function for communicating with API
export const fetchVideos=createAsyncThunk('videos/fetchVideos',async()=>{
const respFromApi=await getVideoList();

return respFromApi;
})
export const addVideo=createAsyncThunk('videos/addVideo',async(data)=>{
    const respFromApi=await createVideo(data);
    
    return respFromApi;
})
export const editVideo=createAsyncThunk('videos/updateVideo',async({id,data})=>{
    const respFromApi=await updateVideo(id,data);
    
    return respFromApi;
})
export const removeVideo=createAsyncThunk('videos/deleteVideo',async(id)=>{
    const respFromApi=await deleteVideo(id);
    return respFromApi;
})

//slice for the thunk functions

const videoSlice=createSlice({
   name:'job',
   initialState,
   reducers:{
  
   },
   extraReducers:(builder)=>{
    builder
    .addCase(fetchVideos.pending,(state)=>{
          state.isLoading=true;
          state.isError=false;
          state.error="";
    })
    .addCase(fetchVideos.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
          state.videos=action.payload;
    })
    .addCase(fetchVideos.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.error=action?.error?.message;
        state.videos=[];
  })
//   .addCase(createJob.pending,(state)=>{
//         state.isLoading=true;
//         state.isError=false;
//         state.error="";
//   })
//   .addCase(createJob.fulfilled,(state,action)=>{
//       state.isLoading=false;
//       state.isError=false;
//         state.jobs.push(action.payload);
//   })
//   .addCase(createJob.rejected,(state,action)=>{
//       state.isLoading=false;
//       state.isError=true;
//       state.error=action.error.message;
//   }
//   )
//   .addCase(updateJob.pending,(state)=>{
//     state.isLoading=true;
//     state.isError=false;
//     state.error="";
// })
// .addCase(updateJob.fulfilled,(state,action)=>{
//   state.isLoading=false;
//   state.isError=false;
//   const updatedJobIndex=state.jobs.findIndex(elem=>elem.id==action.payload.id);
//     state.jobs[updatedJobIndex]=action.payload;
// })
// .addCase(updateJob.rejected,(state,action)=>{
//   state.isLoading=false;
//   state.isError=true;
//   state.error=action.error.message;
// })
// .addCase(deleteJob.pending,(state)=>{
//     state.isLoading=true;
//     state.isError=false;
//     state.error="";
// })
// .addCase(deleteJob.fulfilled,(state,action)=>{
//   state.isLoading=false;
//   state.isError=false;
//   state.jobs=state.jobs.filter(elem=>elem.id!=action.meta.arg);
// })
// .addCase(deleteJob.rejected,(state,action)=>{
//   state.isLoading=false;
//   state.isError=true;
//   state.error=action.error.message;
// }
// )


}
})

export default videoSlice.reducer;
// export const {editActive,editInActive,salarySortingFilter,jobTypeFilter,searchedTextFilter} = videoSlice.actions;