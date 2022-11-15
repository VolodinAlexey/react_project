import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";


export const Price = () => (
<>

<Container style={{marginTop: '100px'}}>
    <Breadcrumb>
          <Breadcrumb.Item linkProps={{ to: "/" }} linkAs={Link}>Главная</Breadcrumb.Item>
          {/* <Breadcrumb.Item linkAs={Link} to="/">Главная</Breadcrumb.Item> */}
          <Breadcrumb.Item active>Цены</Breadcrumb.Item>
        </Breadcrumb>
</Container>

<Container style={{marginTop: '30px'}} >
    <Row>
      <Col md='5'>
        <h2>Цены</h2>
      </Col>
    </Row>
    <Row>
     <Col md='7'>
       <h2>Вариант</h2>
       <a href="https://html5book.ru/tablica-cen-s-pereklyuchatelem/">ссылка</a><br />
       <a href="https://html5book.ru/css-tablicy-cen/">ссылка</a>
     </Col>
    </Row>
</Container>

</>
)



