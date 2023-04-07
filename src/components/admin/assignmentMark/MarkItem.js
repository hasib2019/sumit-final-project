import React,{useState} from 'react'
const MarkItem = ({singleMark}) => {
const {id,student_id,student_name,title,assignment_id,repo_link,mark,status}=singleMark
const [marksGiven,setMarksGiven]=useState(null); 
const handleChange=(e)=>{
    setMarksGiven(e.target.value)
}
return (
        <tr>
    <td className="table-td">{title}</td>
    <td className="table-td">{createdAt}</td>
    <td className="table-td">{student_name}</td>
    <td className="table-td">{repo_link}</td>
    {status=="pending" && 
    <>
      <td className="table-td input-mark">
       <input max="100" value={marksGiven} onChange={handleChange}/>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        </td>
    </>
       }
    {
        status=="published" &&               <td class="table-td">{mark}</td>
    }
</tr>  


       

)
}

export default MarkItem