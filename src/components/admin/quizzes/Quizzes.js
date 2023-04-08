import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchMarks,addMark } from '../../../features/assignmentMarks/assignmentMarksSlice';
import MarkItem from './MarkItem';
const Quizzes = () => {
   const dispatch=useDispatch();
   const {isError,isLoading,marks}=useSelector(state=>state.mark);

  useEffect(()=>{
    dispatch(fetchMarks());
  },[])
  //decide what to do
  let content=null;
  let pendingStatus=[];
  let publishedStatus=[];
  if(isLoading) content=<p>Loading...</p>
  if(!isLoading && isError) content=<p className="error">Network Error</p>
  if(!isLoading && !isError && marks?.length==0) content=<p>No Assignment List found</p>
  if(!isLoading && !isError && marks?.length>0){

    pendingStatus=marks.filter(mark=>mark.status=="pending");
    publishedStatus=marks.filter(mark=>mark.status=="published");

    content=marks.map(mark=><MarkItem key={mark.id} singleMark={mark}/>)
  }

  return (
    <section className="py-6 bg-primary">
    <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
            <ul className="assignment-status">
                <li>Total <span>{marks?.length}</span></li>
                <li>Pending <span>{pendingStatus?.length}</span></li>
                <li>Mark Sent <span>{publishedStatus?.length}</span></li>
            </ul>
            <div className="overflow-x-auto mt-4">
                <table className="divide-y-1 text-base divide-gray-600 w-full">
                    <thead>
                        <tr>
                            <th className="table-th">Assignment</th>
                            <th className="table-th">Date</th>
                            <th className="table-th">Student Name</th>
                            <th className="table-th">Repo Link</th>
                            <th className="table-th">Mark</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-600/50">
                    {
                       content
                    }
              
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>  )
}

export default Quizzes