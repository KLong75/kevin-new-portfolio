// import from Material UI
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';


const ContactInfo = () => {
  return (
    <>
    <Grid container justifyContent={'center'} style={{ padding: '16px'}}>


      <Grid xs={12} md={3}>
      <a 
        href='https://github.com/KLong75' 
        target='_blank' 
        rel='noreferrer' 
        aria-label="Link to Kevin's GitHub Profile"
      >
        <GitHubIcon style={{ fontSize: '30px'}} />
      </a>  
      </Grid>


      <Grid xs={12} md={3}>
      <a 
        href='https://github.com/KLong75' 
        target='_blank' 
        rel='noreferrer' 
        aria-label="Link to Kevin's GitHub Profile"
      >
        <LinkedIn style={{ fontSize: '30px'}} />
      </a>
      </Grid>  
    </Grid> 

    

    <Grid container direction={''} justifyContent={'center'}  style={{ padding: '16px'}}>

      <Grid xs={12} md={4}>
      <a href="tel:512-975-0082">
        <span style={{fontWeight: 'bold', fontSize: '18px'}}>512-975-0082</span>
      </a>
      </Grid>


      <Grid xs={12} md={4}>
      <a href="mailto:kevinjlong75@gmail.com.com">
        <span style={{fontWeight: 'bold', fontSize: '18px'}}>kevinjlong75@gmail.com.com</span>
      </a>
      </Grid>

    
    </Grid>
    </>
  );
};

export default ContactInfo;