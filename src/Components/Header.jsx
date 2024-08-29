import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <Navbar className="bg">
        <Container>
          <Navbar.Brand className='text-light'>
            <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
              <img
                alt=""
                src="/FavIcon.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Media-Player
              <i className="fa-regular fa-circle-play ms-2"></i>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
