import React, { useState } from 'react';
import style from '../styles/Contact.module.css';

function Contact() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const saveUserInfo = () => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    global.alert('Your message has been sent!');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <section className={style.contact_container}>
      <form onSubmit={(e) => e.preventDefault()} action="">
        <input onChange={handleChange} name="name" type="text" placeholder="Name" />
        <input onChange={handleChange} name="email" type="email" placeholder="Email" />
        <input onChange={handleChange} name="phone" type="number" placeholder="Phone" />
        <textarea onChange={handleChange} name="message" id="" cols="30" rows="10" placeholder="Message" />
        <button onClick={saveUserInfo} type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
