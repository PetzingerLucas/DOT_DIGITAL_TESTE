/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from 'react';
import { defaultCards } from '../helpers';
import style from '../styles/AboutMore.module.css';
import next from '../images/next.png';
import prev from '../images/prev.png';

function AboutMore() {
  const cardsSlide = useRef();

  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);

  const validScreen = () => {
    const slideDesktop = cardsSlide.current.offsetWidth * 0.351;
    const slideMobile = cardsSlide.current.offsetWidth * 1.051;
    return window.innerWidth <= 800 ? slideMobile : slideDesktop;
  };

  const nextSlide = () => {
    setDisablePrev(false);
    cardsSlide.current.scrollLeft += (validScreen());
    setDisableNext(cardsSlide.current.scrollLeft === 2151);
  };
  const prevSlide = () => {
    setDisableNext(false);

    cardsSlide.current.scrollLeft -= (validScreen());
    setDisablePrev(cardsSlide.current.scrollLeft === 0);
  };

  return (
    <section id="about_more" className={style.aboutMore_container}>
      <section className={style.aboutMore_slide}>
        <section ref={cardsSlide} className={style.cards_container}>
          { defaultCards.map((card, index) => (
            <div key={index} className={style.card}>

              <img className={style.card_img} src={card.image} alt={card.title} />
              <div className={style.card_text}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className={style.buttons_container}>
        <button
          className={style.prev_btn}
          disabled={disablePrev}
          type="button"
          onClick={prevSlide}
        >
          <img src={prev} alt="prev-btn" />

        </button>
        <button
          className={style.next_btn}
          disabled={disableNext}
          type="button"
          onClick={nextSlide}
        >
          <img src={next} alt="next-btn" />
        </button>

      </section>
    </section>

  );
}

export default AboutMore;
