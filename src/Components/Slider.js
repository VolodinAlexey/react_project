//! Модуль рабочий но отключен Слайдер картинок

import React from "react";
import { Carousel } from "react-bootstrap";
import sliserpage1 from "../img/sliserpage1.jpg";
import sliserpage2 from "../img/sliserpage2.jpg";
import sliserpage3 from "../img/sliserpage3.jpg";



export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{'height': '600px'}}>
        <img className="d-block w-100" src={sliserpage1} alt="First" />
        <Carousel.Caption style={{'color': '#2F4F4F'}} >
          <h3>Зарегистрировать бизнес</h3>
          <p>Проще чем раньше</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{'height': '600px' }}>
        <img className="d-block w-100" src={sliserpage2} alt="First" />
        <Carousel.Caption style={{'color': '#2F4F4F'}}>
          <h3>Отправляйте документы в ФНС</h3>
          <p>без очереди и дополнительных сервисов</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{'height': '600px' }}>
        <img className="d-block w-100" src={sliserpage3} alt="First" />
        <Carousel.Caption style={{'color': '#2F4F4F'}}>
          <h3>Открой своё дело</h3>
          <p>Двигайся в ногу со временем</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
