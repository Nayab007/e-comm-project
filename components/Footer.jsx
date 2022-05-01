import React from 'react';
import { AiFillInstagram, AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
      </p>
    </div>
  )
}

export default Footer