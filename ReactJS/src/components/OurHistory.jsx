/* eslint-disable max-len */
import React from 'react';
import style from '../styles/OurHistory.module.css';
import slide from '../images/slide.png';

function OurHistory() {
  return (
    <section id="our_history" className={style.our_history_container}>
      <img src={slide} alt="nature_image" />
      <div className={style.our_history_text}>
        <h2>LOREM IPSUM</h2>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis

        </p>
        <p>
          <strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi harum esse molestiae non neque. Eveniet repellat dolore, ab est, illo quaerat, facere deserunt veniam repudiandae aperiam commodi officia harum.</strong>
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam blanditiis sed libero? Minima reiciendis illo voluptate autem ab, hic at mollitia delectus atque id, rerum repellendus, corrupti labore voluptatibus voluptatum!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat officiis deleniti cupiditate minima nihil! Odit debitis sed veniam nemo natus libero, laudantium necessitatibus! Impedit deserunt eum eveniet repellat nesciunt.</p>
      </div>
    </section>
  );
}

export default OurHistory;
