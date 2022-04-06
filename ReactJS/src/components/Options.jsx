/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Option from './Option';
import { defaultCards } from '../helpers';
import style from '../styles/Options.module.css';

function Options() {
  const [currentoption, setCurrentOption] = useState(3);
  return (
    <section className={style.options_container}>
      {defaultCards.slice(0, 5).map(({ title, image, description }, index) => (
        <Option
          key={index}
          setCurrentOption={setCurrentOption}
          currentOption={currentoption}
          id={index}
          title={title}
          image={image}
          description={description}
        />
      ))}
    </section>
  );
}

export default Options;
