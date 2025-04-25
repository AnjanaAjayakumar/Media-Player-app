import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'
import { useEffect } from 'react'

function Watchhistory() {

  const [history,setHistory]=useState([])


  const getHistory=async()=>{
   const result= await getHistoryAPI()
   console.log(result);
  if(result.status==200){
    setHistory(result.data)
  }else{
    console.log("API Failed");
    setHistory([])
  }
  }
 console.log(history);
 
  const deleteHistory=async()=>{
    await deleteHistoryAPI(id)
    getHistory()
  }

  useEffect(()=>{
    getHistory()
  },[])


  return (
    <div>
      <div className='container d-flex justify-content-between mt-5' style={{marginTop:"70px"}}>
        <h1>Watch History</h1>
        <Link to={"home"} style={{textDecoration:"none", color:"blueviolet", fontSize:"30px"}}>Back to Home <i class="fa-solid fa-rotate-left"></i></Link>
      </div>
      
      <table className='container shadow '>
        <thead>
          <tr>
            <th>#</th>
            <th>Video Title</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length>0?history.map((video,index)=>(<tr>
          <td>{index+1}</td>
          <td className='text-warning fw-bolder'>{video.title}</td>
          <td className='text-info'> 
          <a href={video.link}>{video.link}</a></td>
          <td>{video.timeStamp}</td>
          <td> <button className='btn btn-link' onClick={e=>deleteHistory(video?.id)}> <i class="fa-solid fa-trash text-danger"></i></button></td>
          </tr>)):null
          }
        </tbody>
      </table>
    </div>
  )
}

export default Watchhistory
