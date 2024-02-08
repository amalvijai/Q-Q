import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Nav() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZhjTe0tLEr5ZgVBbXs7PaHfSF6EKUAaVazm1GhN682d1QZ4AHiGyU1bRuyCwMHZwSmY&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Radom QuoteGenerator
          </Navbar.Brand>
        </Container>
      </Navbar></>
  )
}

export default Nav