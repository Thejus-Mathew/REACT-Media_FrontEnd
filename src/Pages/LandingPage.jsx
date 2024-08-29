import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigateByUrl = useNavigate()

  return (
    <div>
    <Row className='mt-5 justify-content-between w-100 align-items-center'>

      <Col></Col>
      <Col lg={5}>
        <h1 style={{color:'black',fontSize:"40px"}}>Welcome to <span className='text-secondary'>Media-Player</span></h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus assumenda vero quam iste quaerat, magni asperiores laborum, obcaecati perspiciatis labore libero voluptatum fugit incidunt voluptatem quae harum debitis expedita sed.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci earum blanditiis excepturi quae minus eligendi, nobis doloremque dolores animi! Vel exercitationem magni reprehenderit repellendus incidunt enim eaque itaque at.
        </p>
        <Button onClick={() => navigateByUrl("/home-page")} className='btn btn-dark'>get Started</Button>
      </Col>
      <Col lg={5}>
        <img src="https://i.postimg.cc/BvC1GC33/png.png" style={{width:"75%",marginLeft:"12.5%"}} alt="" />
      </Col>
      <Col></Col>

    </Row>

    <div className="container mb-5 mt-5 pt-5 d-flex flex-column align-items-center justify-content-center w-100">
      <h5 className='text-secondary' style={{fontSize:"40px"}}>Features</h5>
      <div className="cards mb-5 mt-3 d-flex align-items-center justify-content-between w-100">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" width={"100%"} />
          <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.dribbble.com/users/793057/screenshots/4220268/music_visualisation.gif" width={"100%"} />
          <Card.Body>
            <Card.Title>Categorized Video</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://scitechdaily.com/images/Music-Rhythm-Frequency-Waveform.gif" width={"100%"} />
          <Card.Body>
            <Card.Title>Watch History</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </div>


      <div className="mx-5 mb-5 border rounded p-5 mt-5 d-flex justify-content-center align-items-center gap-5">
      <div className="col-lg-5">
        <h4 className='text-secondary' >Simple, Powerful & Fast</h4>
        <h6 className='mb-5 mt-4'>
          <span className='text-secondary'>Play Everything</span>
          : Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam, dolorum velit tenetur architecto consectetur laborum ducimus dolores odit laboriosam repellendus debitis, a explicabo unde recusandae voluptatibus soluta saepe nisi!
        </h6>
        <h6 className='mb-5 mt-4'>
          <span className='text-secondary'>Play Everything</span>
          : Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam, dolorum velit tenetur architecto consectetur laborum ducimus dolores odit laboriosam repellendus debitis, a explicabo unde recusandae voluptatibus soluta saepe nisi!
        </h6>
        <h6 className='mb-5 mt-4'>
          <span className='text-secondary'>Play Everything</span>
          : Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam, dolorum velit tenetur architecto consectetur laborum ducimus dolores odit laboriosam repellendus debitis, a explicabo unde recusandae voluptatibus soluta saepe nisi!
        </h6>
      </div>
      <div className="col-lg-5">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4NJlUribp3c?si=CRkRypxzRrS4afxs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      </div>
    </div>
    
  )
}

export default LandingPage
