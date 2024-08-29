import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addVideoHistoryAPI, deleteVideo } from '../../Services/allAPI';



function VideoCard({ video,setDeleteVideoResponse,insideCategory }) {




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {//made async beacuse we use api call
    setShow(true);
    const { name, link } = video
    const today = new Date()

    let timeStamp = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(today)

    let videoHistory = { name, link, timeStamp }

    await addVideoHistoryAPI(videoHistory)

  }

  const delVideo = async(id) => {
    await deleteVideo(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted = (e,id) => {
    // console.log("drag started",id);
    e.dataTransfer.setData("VideoId",id)
  }


  return (
    <>

      <Card style={{ width: '18rem' }} draggable onDragStart={(e)=>dragStarted(e,video?.id)}>
        <Card.Img onClick={handleShow} variant="top" width={"100%"} style={{ aspectRatio: "1.7/1" }} src={video?.url} />
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center'>
            <Card.Title>{video.name}</Card.Title>
            {insideCategory?null:<button onClick={()=>delVideo(video?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}
          </div>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${video?.link}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard
