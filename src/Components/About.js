import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MdEmail, MdCall} from "react-icons/md";
import { GrSkype} from "react-icons/gr";
import { RiRoadMapFill} from "react-icons/ri";
import sliserpage3 from "../img/sliserpage3.jpg";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

export const About = () => (
<>

<Container style={{marginTop: '100px'}}>
    <Breadcrumb>
          <Breadcrumb.Item linkProps={{ to: "/" }} linkAs={Link}>Главная</Breadcrumb.Item>
          {/* <Breadcrumb.Item linkAs={Link} to="/">Главная</Breadcrumb.Item> */}
          <Breadcrumb.Item active>О проекте</Breadcrumb.Item>
    </Breadcrumb>
</Container>

<Container style={{margin: '30px'}} >
    <Row>
        <Col md='7'>
        {/* height={350} */}
            <img src={sliserpage3} className=" img-fluid rounded-3" height='350'/>
        </Col>
        <Col md='5'>
            <h2>О проекте</h2>
            <p>
                Наш проект на рынке с 2022 года.
            </p>
            <p>
                Мы дорожим каждым нашим клиентом, поэтому высокое качество сервиса-
                приоритет для нас. Вы всегда можете задать интересующие вас вопросы в онлайн-режите или по телефону и получить подробную консультацию.
            </p>
            <p>
                Команда профессионалов следит за постоянным пополнением и обновлением функционала, разработкой предложений. Сотрудники проходят основательную подготовку, совершенствуют свои навыки и знания,
                проходят специальные курсы и тренинги, чтобы идти в ногу соо временем.
            </p>
            <p>
                Мы работаем по всей России. Геограция наших клиентов постоянно расширяется.
            </p>
            <h2>Наши контакты</h2>
            <p>
            <MdEmail size='30' />
            <a href="mailto:info@vladistech.ru" > Написать info@vladistech.ru</a>
            </p>
            <p>
            <GrSkype size='30' />
            <a href="callto:+79191850310"> Позвонить нам с помощью Skype</a>
            </p>
            <p>
            <MdCall size='30' />
            <a href="tel:+79191850310"> Позвоните нам!</a>
            </p>
            <p>
            <RiRoadMapFill size='30' />
            <a href="https://yandex.ru/maps/193/voronezh/house/ulitsa_chelyuskintsev_101b/Z0AYdw5gS0YCQFtrfXp1eXphYw==/?ll=39.190235%2C51.648628&utm_medium=mapframe&utm_source=maps&z=16.75"> г.Воронеж ул.Челюскинцев 101Б</a>
            </p>
        </Col>
    </Row>
</Container>

</>
)
