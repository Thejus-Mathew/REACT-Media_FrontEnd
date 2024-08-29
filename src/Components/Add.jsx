import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoAPI } from '../../Services/allAPI'






function Add({ setUploadVideoResponse }) {

  const [uploadvideo, setUploadVideo] = useState({ id: "", name: "", url: "", link: "" })


  const getYoutubeLink = (e) => {
    const { value } = e.target
    if (value.includes("v=")) {
      let VID = value.split("v=")[1].slice(0, 11)
      setUploadVideo({ ...uploadvideo, link: `https://www.youtube.com/embed/${VID}` })
    } else {
      setUploadVideo({ ...uploadvideo, link: `` })
    }
  }


  const handelAdd = async () => {
    const { id, name, url, link } = uploadvideo

    if (!id || !name || !url || !link) {
      alert("please fill the missing fields")
    } else {
      const result = await uploadVideoAPI(uploadvideo)
      if (result.status >= 200 && result.status < 300) {
        console.log(result.data);
        alert("Video Uploaded")
        handleClose()
        setUploadVideo({ id: "", name: "", url: "", link: "" })
        setUploadVideoResponse(result.data)
      }
      else {
        alert(result.message)
      }
    }
  }





  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className="d-flex align-items-center">
        <h2 className='p-0 m-0 me-2'>Upload-Videos</h2>
        <button onClick={handleShow} className='btn fs-4'><i className="fa-solid fa-arrow-up-from-bracket fa-bounce"></i></button>

      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Id"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Id" onChange={(e) => setUploadVideo({ ...uploadvideo, id: e.target.value })} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Name" onChange={(e) => setUploadVideo({ ...uploadvideo, name: e.target.value })} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Image Url"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Image Url" onChange={(e) => setUploadVideo({ ...uploadvideo, url: e.target.value })} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingName" label="Video Url">
            <Form.Control type="text" placeholder="Video Url" onChange={(e) => getYoutubeLink(e)} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handelAdd} >Add</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add
