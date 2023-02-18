import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { BsJustify } from "react-icons/bs";

import styled from "styled-components";
import '../style/MainPage.css'

const MainContainer = styled.div`
  background-color: #34495e;
`;

function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <MainContainer>
        <BsJustify size="35" onClick={handleShow} />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><b>LIST</b></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link to="/counter">
              <div>counter</div>
            </Link>
            <Link to="/memo">
              <div>Memo</div>
            </Link>
            <Link to="/Users">
              <div>Users_Json OpenAPI</div>
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="body">
          <div className="loading">
            <span>돌아가</span>
          </div>
        </div>
      </MainContainer>
  );
}

export default Main;
