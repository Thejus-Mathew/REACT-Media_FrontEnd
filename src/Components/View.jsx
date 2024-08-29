import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllUploadedVideosAPI, getVideoCategoryAPI, updateVideoCategoryAPI } from '../../Services/allAPI'

function View({ uploadVideoResponse,setCategoryVideoRemoveResponse}) {

  const[deleteVideoResponse,setDeleteVideoResponse] = useState(false)
  const [allvideos, setAllVideos] = useState([])




  const getAllVideos = async () => {
    const result = await getAllUploadedVideosAPI()
    if (result.status > 199 && result.status < 300) {
      setAllVideos(result.data)
    } else {
      console.log("API Failed");
      setAllVideos([])
    }
  }


  useEffect(() => {
    getAllVideos()
    setDeleteVideoResponse(false)
  }, [uploadVideoResponse,deleteVideoResponse])

  const dragOver = (e) => {
    // console.log(`Video dragged over to the view`);
    e.preventDefault()
  }

  const videoDropped =async (e) =>{
    const{videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
    
    // console.log(`video ${videoId} from category ${categoryId} dropped into view`);

    const {data} = await getVideoCategoryAPI()
    const selectedCategory = data.find(item=>item.id==categoryId)
    selectedCategory.allVideos = selectedCategory.allVideos.filter(item=> item.id != videoId )
    const res = await updateVideoCategoryAPI(categoryId,selectedCategory)
    setCategoryVideoRemoveResponse(res)
    
  }




  return (
    <>

      <Row style={{height:"100%"}} className='d-flex align-content-start flex-wrap' droppable="true" onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)}>
        {
          allvideos?.length > 0 ? allvideos.map((video, index) => (
            <Col key={index} sm={12} md={4} lg={3}>
              <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} video={video} />
            </Col>
          )) : <p>Nothing to Display</p>
        }
      </Row>

    </>
  )
}

export default View
