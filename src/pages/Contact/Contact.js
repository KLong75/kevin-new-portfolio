// import components
// import Header from '../../components/Header';
import DisplayBox from "../../components/DisplayBox";
import ContactForm from "../../components/ContactForm";
import ScheduleAppointment from '../../components/ScheduleAppointment';
import ContactInfo from '../../components/ContactInfo';


// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import images

// import styles
// import styles from './Contact.module.css';


const Contact = () => {
  return (
    <>
    <Grid container spacing={6} justifyContent='space-evenly' textAlign='center' >
     
      <Grid xs={12} style={{ marginTop: ''}}>
        <h3 className='permanent-marker' style={{ fontSize: '2rem', marginTop: '0'}}>&lt; Let's Talk! /&gt;</h3>
      </Grid>

      <Grid sm={12} md={4} />
      
      <Grid  sm={12} md={4} style={{ marginTop: '-80px'}} height=''>
        <DisplayBox elevation={12} >
          <ScheduleAppointment  />
        </DisplayBox>
      </Grid>

      <Grid sm={12} md={4} />

      <Grid sm={12} md={2} />

      <Grid  sm={12} md={8}  style={{ marginTop: '-80px'}} height=''>
        <DisplayBox elevation={12} >
        <Grid xs={12} style={{marginTop: '', marginBottom: '-2rem'}}>
        <h4 style={{margin: 0}}className="permanent-marker">&lt; My Contact Info /&gt;</h4>
      </Grid>
          <ContactInfo />
        </DisplayBox>
      </Grid>

      <Grid sm={12} md={2} />
      

      <Grid sm={12} md={8} style={{ marginTop: '-80px'}}>
        <DisplayBox elevation={12}>
          <ContactForm />
        </DisplayBox>
      </Grid>
    </Grid>
    </>
  );
};

export default Contact;