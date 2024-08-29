import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import View from "../Components/View"
import Category from '../Components/Category'

function HomePage() {

  const[uploadVideoResponse,setUploadVideoResponse] = useState({})
  const[categoryVideoRemoveResponse,setCategoryVideoRemoveResponse] = useState({})
  return (
    <>
    
    <div className="container-fluid px-5 mb-5 mt-3 d-flex justify-content-between">
      <div className="add-videos">
        <Add setUploadVideoResponse = {setUploadVideoResponse}/>
      </div>
      <Link style={{textDecoration:"none",fontSize:"30px"}} className='text-secondary'  to={"/watch-history"} >Watch History <i className="fa-solid fa-arrow-right"></i></Link>
    </div>
    
    <div className="container-fluid mt-5 mb-3 row w-100">
      <div className="all-videos col-lg-9">
        <h2>All-Videos</h2>
        <View uploadVideoResponse = {uploadVideoResponse} setCategoryVideoRemoveResponse = {setCategoryVideoRemoveResponse}/>
      </div>
      <div className="category col-lg-3">
        <Category categoryVideoRemoveResponse = {categoryVideoRemoveResponse}/>
      </div>
    </div>
    </>
  )
}

export default HomePage
