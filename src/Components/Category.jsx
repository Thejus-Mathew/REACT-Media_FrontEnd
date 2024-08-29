import { MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { addVideoCategoryAPI, deleteVideoCategoryAPI, getAVideo, getVideoCategoryAPI, updateVideoCategoryAPI } from '../../Services/allAPI';
import VideoCard from './VideoCard';



function Category({categoryVideoRemoveResponse}) {

  const[categoryName,setcategoryName] = useState("")
  const[allCategories,setAllCategories] = useState([])
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd =async () => {
    if(categoryName) {
      const result = await addVideoCategoryAPI({categoryName,allVideos:[]})
      if(result.status>199 && result.status<300) {
        handleClose()
        setcategoryName("")
        showAllCategories()
      }else{
        alert(result.message)
      }
    }else{
      alert("Please fill missing field")
    }
  }

  useEffect(() => {
    showAllCategories()
},[categoryVideoRemoveResponse])

  const showAllCategories =async () => {
    const {data} = await getVideoCategoryAPI()
    setAllCategories(data)
  }

  const deleteCategory = async (id) => {
    await deleteVideoCategoryAPI(id)
    showAllCategories()
  }

  const dragOver = (e) => {
    // console.log(`Video dragged over to the category`);
    e.preventDefault()
  }

  const videoDropped =async (e,catId) =>{
    const videoId = e.dataTransfer.getData("videoId")
    // console.log(`video ${videoId} dropped into category ${catId}`);

    const {data} = await getAVideo(videoId)
    const selectedCategory = allCategories.find(item => item.id==catId)
    selectedCategory.allVideos.push(data)

    const res = await updateVideoCategoryAPI(catId,selectedCategory)
    showAllCategories()
  }

  const videoDragStarted = (e,videoId,categoryId) => {
    // console.log("drag started from video",videoId,"and category",categoryId);
    let dataShare = {videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }


  return (
    <>

      <div className="d-gird">
        <button onClick={handleShow} className='btn btn-info'>Add category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <MDBInput label="Category Name" onChange={(e)=>setcategoryName(e.target.value)} size="lg" id="form1" type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      {
        allCategories?.length>0?allCategories.map((cat,index) => (
          <div key={index} className=" mt-3 border rounded p-3" droppable="true" onDrop={e=>videoDropped(e,cat?.id)} onDragOver={e=>dragOver(e)}>
            <div className="d-flex justify-content-between align-items-center">
              <h5>{cat?.categoryName}</h5>
              <button onClick={()=>deleteCategory(cat?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
            </div>

            <Row>
              {
                cat?.allVideos?.length>0?cat?.allVideos.map((card,index) => (
                  <Col key={index} sm={12} className='mx-5 mt-3' draggable onDragStart={(e)=>videoDragStarted(e,card.id,cat.id)}>
                    <VideoCard video={card} insideCategory={true}/>
                  </Col>
                )):<p>No Videos</p>
              }
            </Row>


          </div>
        )
        ):<p>Nothing to Show Here</p>
      }

    </>
  )
}

export default Category
