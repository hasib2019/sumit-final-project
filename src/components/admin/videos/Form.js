// import Success from "../ui/Success";
import { useState } from "react";
import TextArea from "../../../ui/TextArea";
import TextInput from "../../../ui/TextInput";
import { addVideo, editVideo } from "../../../features/videos/videosSlice";
import { useDispatch,useSelector } from "react-redux";
import Error from "../../../ui/Error";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const initialState={
    title:"",
    description:"",
    url:"",
    date:null,
    duration:"",
    views:"",
    duration:""
}
const AddEditVideo = () =>  {
    const dispatch=useDispatch();
    const {isLoading,isError,error,editingObj}=useSelector(state=>state.video);
    const {id}=editingObj||{}
    let navigate = useNavigate(); 
    
    //local state for main form
    const [videoInfo,setVideoInfo]=useState(initialState);
    const {title,date,description,duration,url,views}=videoInfo;
    useEffect(()=>{
          if(id){
               setVideoInfo(editingObj);
          }
    },[editingObj])
     console.log("Edting Obj & editing mode---",editingObj);
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setVideoInfo({
        ...videoInfo,
        [name]:value
      }) 
    }
    const handleSubmit = (e) => {
        let path="/admin/videos"
        e.preventDefault();
        if(id){
            let data={title,
            createdAt:date,
            description,duration,url,views}
            dispatch(editVideo({
                data,
                id
            }));   
        }else{
        dispatch(addVideo({title,
            createdAt:date,
            description,duration,url,views
        }));
       }
        setVideoInfo(initialState);
        navigate(path)
    };
    return (
        <form method="POST" onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput
                                title="Video title"
                                value={title}
                                name="title"
                                onChange={handleChange}
                            />
                        </div>

               
                        <div className="col-span-6">
                            <TextInput
                                title="Video Duration"
                                value={duration}
                                name="duration"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-6">
                            <TextArea
                                title="Description"
                                value={description}
                                name="description"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-6">
                            <TextInput
                                title="Upload Date"
                                value={date}
                                type="date"
                                name="date"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput
                                title="Url"
                                value={url}
                                name="url"
                                onChange={handleChange}
                            />
                        </div>

        
                       
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput
                                title="Video no of views"
                                value={views}
                                name="views"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        disabled={isLoading}
                        id="addFormBtn"
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500 "
                        onClick={handleSubmit}
                    >
                        {id?"Update":"Save"}
                    </button>
                </div>
                {isError && (
                    <Error error={error} />
                )}
            </div>
        </form>
    );
}
export default AddEditVideo;
