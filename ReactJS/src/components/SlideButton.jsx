import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import checked from '../images/checked.png';
import unchecked from '../images/unchecked.png';
import style from '../styles/Header.module.css';

function SlideButton({ setCurrentSlide, id, currentSlide }) {
  const [isChecked, setIsChecked] = useState(true);
  const validate = !!((isChecked && id === currentSlide));

  useEffect(() => {
    setIsChecked(validate);
  }, [validate]);

  const handleClick = () => {
    setIsChecked(true);
    setCurrentSlide(id);
  };

  return (
    <button className={isChecked ? style.checkedbtn : style.uncheckedbtn} type="button" onClick={handleClick}>
      <img src={validate ? checked : unchecked} alt="" />
    </button>
  );
}

SlideButton.propTypes = {
  setCurrentSlide: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
};

export default SlideButton;
