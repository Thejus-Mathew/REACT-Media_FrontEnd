import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryAPI, getVideoHistoryAPI } from '../../Services/allAPI'

function WatchHistory() {
  const[history,setHistory] = useState([])

  useEffect(() => {
    getHistory()
  },[])

  const getHistory = async() => {
    const result = await getVideoHistoryAPI()
    if(result.status == 200) {
      setHistory(result.data)
    }else{
      console.log("API failed");
      console.log(result.message);
    }
  }

  const removeVideoHistory = async(id) => {
    await deleteVideoHistoryAPI(id)
    getHistory()
  }
  
  return (
    <>
    
    <div className="container-fluid px-5 mt-4 mb-5 d-flex justify-content-between">
      <h2>Watch-History</h2>
      <Link className="text-secondary" style={{textDecoration:"none",fontSize:"30px"}} to={"/home-page"} >Back to Home <i className="fa-solid fa-arrow-left"></i></Link>
    </div>

    <table className='table mb-5 container shadow w-100'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Url</th>
          <th>TimeStamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        history?.length>0?history.map((video,index)=>
        (
          <tr key={index}>
          <td>{index+1}</td>
          <td>{video?.name}</td>
          <td><a target='_blank' href={`${video?.link}`}>{video?.link}</a></td>
          <td>{video?.timeStamp}</td>
          <td><button onClick={() => removeVideoHistory(video?.id)} className='btn'><i className="fa-solid text-danger fa-trash"></i></button></td>
        </tr>
        )
        ):<p>Nothing to Show here</p>
      
      }
      </tbody>
    </table>
    
    </>
  )
}

export default WatchHistory
