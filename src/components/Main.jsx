import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { BsJustify } from "react-icons/bs";

import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #CCFFFF;
`

function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MainContainer>
      <BsJustify size="27" onClick={handleShow}/>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>하고 싶은거</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/counter">
            <div>counter</div>
            <div>test</div>
          </Link>
          <Link to="/memo">
            <div>Memo</div>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </MainContainer>
  );
}

export default Main;
