import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'




export const Footer = () => {
  return (
    <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
          <img src='./img/vk.svg'alt='vk' width={35}></img>
      </Nav.Link>
    </Nav.Item>
  </Nav>
  )
}

export default Footer;