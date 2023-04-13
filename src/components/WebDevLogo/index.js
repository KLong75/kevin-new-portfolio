import React from "react";

import { Link } from "react-router-dom";

// import image
import devKevLogo from '../../assets/logos/devKevLogo.png';

// import styles
import styles from './WebDevLogo.module.css';


const WebDevLogo = () => {
  return (
   
    <Link to="/">
      <img src={devKevLogo} alt="web development icon" className={styles.logoImage} sx={{ maxWidth: '100%' }} />
    </Link>
  )
}

export default WebDevLogo;