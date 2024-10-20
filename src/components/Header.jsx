import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
    <Navbar>
        <Container>
          <Navbar.Brand className='text-warning fs-4'>
            iMedia <FontAwesomeIcon icon={faVideo} fade style={{color: "#ff8b1f",}} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header