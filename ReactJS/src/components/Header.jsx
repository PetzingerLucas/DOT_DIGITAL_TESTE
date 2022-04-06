/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import slide from '../images/slide.png';
import SlideButton from './SlideButton';
import style from '../styles/Header.module.css';
import down from '../images/down.png';
import { slide2, slide3 } from '../helpers';

function Header() {
  const slides = [slide, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <header className={style.header_container}>
      <div className={style.title_container}>
        <h1>LOREM IPSUM</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <a href="#about_more">
          <img className={style.down} src={down} alt="" />
        </a>
      </div>

      <img src={slides[currentSlide]} alt="" />
      <div className={style.slide_buttons}>
        {slides.map((_slide, index) => (
          <SlideButton
            key={index}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
            id={index}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
