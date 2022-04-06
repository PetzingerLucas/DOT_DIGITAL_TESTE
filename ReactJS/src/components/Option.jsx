import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from '../styles/Options.module.css';
import hide from '../images/hide.png';
import show from '../images/show.png';

function Option({
  title, image, description, setCurrentOption, currentOption, id,
}) {
  const [isShowOption, setIsShowOption] = useState(id === 3 && true);
  const validate = !!((isShowOption && id === currentOption));
  const handleClick = () => {
    setIsShowOption(!isShowOption);
    setCurrentOption(id);
  };

  useEffect(() => {
    setIsShowOption(validate);
  }, [validate]);

  return (
    <section className={isShowOption ? style.slideOptionShow : style.slideOption}>
      <button
        className={isShowOption ? style.show_option_btn : style.option_btn}
        type="button"
        onClick={handleClick}
      >
        <div>
          <h1>{title}</h1>
        </div>
        <img src={isShowOption ? hide : show} alt="show_btn" />

      </button>
      {isShowOption && (
        <div className={style.option_container}>
          <img src={image} alt="nature_picture" />
          <p>{description}</p>
        </div>
      )}

    </section>
  );
}

Option.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setCurrentOption: PropTypes.func.isRequired,
  currentOption: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Option;
