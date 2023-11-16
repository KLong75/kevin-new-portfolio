// import from Material UI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
// import styles
import styles from './ContactIcons.module.css';

const ContactIcons = () => {
  return (
    <>
    <Grid container direction={'row'} justifyContent={'space-evenly'}  style={{ padding: '16px'}}>

      <a href="tel:512-975-0082">
      <PhoneAndroidIcon className={styles.contactIcons} style={{ fontSize: '30px'}} />
      </a>
      
      <a href="mailto:kevinlong.dev@gmail.com">
      <EmailIcon className={styles.contactIcons} style={{ fontSize: '30px'}} />
      </a>
   
      <a 
        href='https://github.com/KLong75' 
        target='_blank' 
        rel='noreferrer' 
        aria-label="Link to Kevin's GitHub Profile"
      >
        <GitHubIcon className={styles.contactIcons} style={{ fontSize: '30px'}} />
      </a>  
     
      <a 
        href='https://www.linkedin.com/in/kevinlongdev' 
        target='_blank' 
        rel='noreferrer' 
        aria-label="Link to Kevin's LinkedIn Profile"
      >
        <LinkedIn className={styles.contactIcons} style={{ fontSize: '30px'}} />
      </a>
    </Grid>
    </>
  );
};

export default ContactIcons;