// import components
import DisplayBox from "../../components/DisplayBox";
import ContactForm from "../../components/ContactForm";
import ScheduleAppointment from '../../components/ScheduleApointment';

// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import images

// import styles
// import styles from './Contact.module.css';


const Contact = () => {
  return (
    
    <Grid container spacing={6} justifyContent='center' textAlign='center' >
     
      <Grid xs={12} style={{ marginTop: ''}}>
        <h1 className='' style={{ fontSize: '', marginBottom: ''}}>Get In Touch</h1>
      </Grid>

      <Grid xs={12} md={4} lg={4}>

      </Grid>

      <Grid  xs={12} md={4} lg={4} style={{ marginTop: ''}} height=''>
        <DisplayBox elevation={6} >
          <ScheduleAppointment  />
        </DisplayBox>
        {/* <DisplayBox elevation={6} >
        </DisplayBox> */}
      </Grid>

      <Grid xs={12} md={4} lg={4}>

      </Grid>
     
      <Grid xs={12} md={6} style={{ marginTop: '-60px'}}>
        <DisplayBox elevation={6}>
          <ContactForm />
          
        </DisplayBox>
      </Grid>
      
    </Grid>
    
  );
};

export default Contact;