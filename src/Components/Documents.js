import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

export const Documents = () => (
<>

<Container style={{marginTop: '100px'}}>
    <Breadcrumb>
          <Breadcrumb.Item linkProps={{ to: "/" }} linkAs={Link}>Главная</Breadcrumb.Item>
          {/* <Breadcrumb.Item linkAs={Link} to="/">Главная</Breadcrumb.Item> */}
          <Breadcrumb.Item active>Документы</Breadcrumb.Item>
        </Breadcrumb>
</Container>

<Container style={{marginTop: '30px'}} >
    <Row>
      <Col md='5'>
        <h2>Документ</h2>

      </Col>
    </Row>
    <Row>
     <Col md='7'>
       <h2>...</h2>
     </Col>
    </Row>
</Container>

</>
)
