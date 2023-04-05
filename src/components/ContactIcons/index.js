// import from Material UI
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

const ContactIcons = () => {
  return (
    <>
    <Grid container direction={'row'} justifyContent={'space-evenly'}  style={{ padding: '16px'}}>

      {/* <Grid xs={1} > */}
      <a href="tel:512-975-0082">
      <PhoneAndroidIcon style={{ fontSize: '30px'}} />
      </a>
      {/* </Grid> */}


      {/* <Grid xs={1} > */}
      <a href="mailto:kevinjlong75@gmail.com.com">
      <EmailIcon style={{ fontSize: '30px'}} />
      </a>
      {/* </Grid> */}

  

      {/* <Grid xs={1} > */}
      <a 
        href='https://github.com/KLong75' 
        target='_blank' 
        rel='noreferrer' 
        aria-label="Link to Kevin's GitHub Profile"
      >
        <GitHubIcon style={{ fontSize: '30px'}} />
      </a>  
      {/* </Grid> */}


      {/* <Grid xs={1} > */}
      <a 
        href='https://www.linkedin.com/in/klong75/' 
        target='_blank' 
        rel='noreferrer' 
        aria-label="Link to Kevin's LinkedIn Profile"
      >
        <LinkedIn style={{ fontSize: '30px'}} />
      </a>
      {/* </Grid>   */}

    
    </Grid>
    </>
  );
};

export default ContactIcons;