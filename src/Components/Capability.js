import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

export const Capability = () => (
<>

<Container style={{marginTop: '100px'}}>
    <Breadcrumb>
          <Breadcrumb.Item linkProps={{ to: "/" }} linkAs={Link}>Главная</Breadcrumb.Item>
          {/* <Breadcrumb.Item linkAs={Link} to="/">Главная</Breadcrumb.Item> */}
          <Breadcrumb.Item active>Возможности</Breadcrumb.Item>
        </Breadcrumb>
</Container>

<Container style={{marginTop: '30px'}} >
    <Row>
      <Col md='5'>
        <h2>Возможности проекта "Регистрация бизнеса"</h2>
        <br />
        <ol>
          <li>Простота и легкость заполнения данных в сервисе;</li>
          <li>Инструкция по дальнейшим действиям, необходимым для регистрации изменений компании;</li>
          <li>Проверка введённых Вами сведений нашим проектом;</li>
          <li>Онлайн-отправка документов в налоговую через Интернет.</li>
        </ol>
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


