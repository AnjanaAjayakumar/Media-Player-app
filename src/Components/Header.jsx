import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
       <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:"none", color:'blue',fontWeight:"30px"}}>
          <i className="fa-solid fa-play fa-beat-fade me-3"></i>
          Media Player
          </Link>           
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
