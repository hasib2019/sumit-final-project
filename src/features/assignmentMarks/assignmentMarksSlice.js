
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { getMarksList,updateMark} from "./assignmentMarksApi";

//initialState
const initialState={
    isLoading:"",
    isError:"",
    error:"",
    marks:[]
}
//async thunk function for communicating with API
export const fetchMarks=createAsyncThunk('assignmentMarks/getMarks',async()=>{
     const respFromApi=await getMarksList();
     return respFromApi;
})
export const editMark=createAsyncThunk('assignmentMarks/editMark',async({id,data})=>{
    const respFromApi=await updateMark(id,data);
    return respFromApi;
})

//Creating Slice

const assignmentMarksSlice=createSlice({
    name:'assignmentMarks',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
         builder
         .addCase(fetchMarks.pending,(state)=>{
            state.isLoading=true;
            state.isError=false;
            state.error="";
      })
      .addCase(fetchMarks.fulfilled,(state,action)=>{
          state.isLoading=false;
          state.isError=false;
          state.marks=action.payload;
      })
      .addCase(fetchMarks.rejected,(state,action)=>{
          state.isLoading=false;
          state.isError=true;
          state.error=action?.error?.message;
          state.marks=[];
    })
    .addCase(editMark.pending,(state)=>{
       state.isLoading=true;
       state.isError=false;
       state.error="";
 })
 .addCase(editMark.fulfilled,(state,action)=>{
     state.isLoading=false;
     state.isError=false;
     const updatedMarkIndex=state.marks.findIndex(elem=>elem.id==action.payload.id);
     state.marks[updatedMarkIndex]=action.payload;
 })
 .addCase(editMark.rejected,(state,action)=>{
     state.isLoading=false;
     state.isError=true;
     state.error=action?.error?.message;
     state.marks=[];
})      
    }
})

export default assignmentMarksSlice.reducer;