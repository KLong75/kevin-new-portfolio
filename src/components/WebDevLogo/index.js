import React from "react";

import { Link } from "react-router-dom";

import webDevIcon from '../../assets/logos/webDevRound.png';

import styles from './WebDevLogo.module.css';


const WebDevLogo = () => {
  return (
   
    <Link to="/">
      <img src={webDevIcon} alt="web development icon" className={styles.logoImage} sx={{ maxWidth: '100%' }} />
    </Link>
  )
}

export default WebDevLogo;