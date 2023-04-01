// import from React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import components
import WebDevLogo from '../WebDevLogo';

// import { DisplayBox } from '../../utils/DisplayBox'

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import components
import Sphere from "../Sphere";

// import images/logos


// import styles from './Header.module.css';



const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <header style={{ padding: '16px', backgroundColor: '' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
     
      <WebDevLogo />
       
        {isMobile ? (
          <IconButton onClick={handleMenuOpen} size="large">
            <MenuIcon />
          </IconButton>
        ) : (
          <nav style={{ margin: 0, padding: 0 }}>
          
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                  <Link to="/">Home</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <Link to="/about">About</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <Link to="/contact">Contact</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <Link to="/my_work">My Work</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <Link to="/resume">Resume</Link>
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <a 
                  href='https://github.com/KLong75' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='footer-instagram-link' 
                  aria-label="Link to Kevin's LinkedIn page"
                >
                  <GitHubIcon style={{ fontSize: '30px'}} />
                </a>  
              </li>
              <li style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
                <a 
                  href='https://www.linkedin.com/in/klong75/' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='footer-instagram-link' 
                  aria-label="Link to Kevin's LinkedIn page"
                >
                  <LinkedIn style={{ fontSize: '30px'}} />
                </a>  
              </li>
              
            </ul>
          </nav>
        )}
        
        <Menu
          className="mobile-menu"
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: "fixed",
              width: "100%",
              height: "100%",
              margin: 0,
              padding: 0,
              backgroundColor: "",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "",
              opacity: ".89",
            },
          }}
        >
          <Grid container spacing={0} alignItems='' textAlign='center'>
          <Grid item xs={12}>
          <WebDevLogo style={{ width: '40%', height: 'auto', marginTop: '0px', marginBottom: '-10px' }}/>
          {/* <img 
            src={WebDevLogo} 
            alt=" Logo" 
            style={{ width: '40%', height: 'auto', marginTop: '0px', marginBottom: '-10px' }} 
          /> */}
          </Grid>
          <Grid xs={12}>
          <MenuItem 
            component={Link} 
            to="/" 
            onClick={handleMenuClose} 
            style=
              {{ 
                padding: '18px', 
                fontSize: '22px',
                marginLeft: '40px',
                // justifyContent: 'center'
              }}
            >Home
          </MenuItem>
          </Grid>
          <Grid xs={12}>
          <MenuItem 
            component={Link} 
            to="/about" 
            onClick={handleMenuClose} 
            style={{ 
              padding: '18px', 
              fontSize: '22px',
              marginLeft: '40px',
              // justifyContent: 'center' 
            }}
            >About Me
          </MenuItem>
          </Grid>
          <Grid xs={12}>
          <MenuItem 
            component={Link} 
            to="/contact" 
            onClick={handleMenuClose} 
            style=
              {{ 
                padding: '18px', 
                fontSize: '22px',
                marginLeft: '40px' 
              }}
            >Contact
          </MenuItem>
          </Grid>
          <Grid xs={12}>
          <MenuItem 
            component={Link} 
            to="/sam-hahn-travel/design-process" 
            onClick={handleMenuClose} 
            style=
              {{ 
                padding: '18px', 
                fontSize: '22px',
                marginLeft: '40px' 
              }}
            >My Work
          </MenuItem>
          </Grid>
          <Grid xs={12}>
          <MenuItem 
            component={Link} 
            to="/sam-hahn-travel/self-booking" 
            onClick={handleMenuClose} 
            style=
              {{ 
                padding: '18px', 
                fontSize: '22px',
                marginLeft: '40px' 
              }}
            >Resume
          </MenuItem>
          </Grid>
          <Grid xs={12}>
          <MenuItem style={{padding: '18px',
              marginLeft: '40px'}}>
            <a 
                  href='https://github.com/KLong75' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='footer-instagram-link' 
                  aria-label="Link to Kevin's LinkedIn page"
                >
                  <GitHubIcon style={{ fontSize: '30px'}} />
            </a>  
          </MenuItem>
          </Grid>
          <Grid xs={12}>
          <MenuItem style={{padding: '18px',
              marginLeft: '40px'}}>
            <a 
                  href='https://github.com/KLong75' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='footer-instagram-link' 
                  aria-label="Link to Kevin's LinkedIn page"
                >
                  <LinkedIn style={{ fontSize: '30px'}} />
            </a>  
          </MenuItem>
          </Grid>
          </Grid>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
