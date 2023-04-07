import React, { Fragment ,useEffect} from 'react';
import { fetchVideos } from '../../../features/videos/videosSlice';
import { useSelector,useDispatch } from 'react-redux';
import VideoListItem from './VideoListItem';
const Videos = () => {
    const dispatch=useDispatch();
    const {isLoading,isError,videos}=useSelector(state=>state.video);
   
    useEffect(()=>{
        dispatch(fetchVideos());
    },[])
  //decide what to render
  let content=null;
  if(isLoading) content=<p>Loading...</p>
  if(!isLoading && isError) content=<p className="error">Network Error</p>
  if(!isLoading && !isError && videos?.length==0) content=<p>No video list found</p>
  if(!isLoading && !isError && videos?.length>0){


    content=videos.map(video=><VideoListItem key={video.id} video={video}/>)
  }
    return (
        <Fragment>
            <section class="py-6 bg-primary">
                <div class="mx-auto max-w-full px-5 lg:px-20">
                    <div class="px-3 py-20 bg-opacity-10">
                        <div class="w-full flex">
                            <button class="btn ml-auto">Add Video</button>
                        </div>
                        <div class="overflow-x-auto mt-4">
                            <table class="divide-y-1 text-base divide-gray-600 w-full">
                                <thead>
                                    <tr>
                                        <th class="table-th">Video Title</th>
                                        <th class="table-th">Description</th>
                                        <th class="table-th">Action</th>
                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-slate-600/50">
                                {
                                    content
                                }
                         
                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Videos