// import from React

// import from MUI
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

const ScheduleAppointment = () => {
  
  return (
    <Grid container spacing={1} justifyContent='center' textAlign='center' >
    {/* <section > */}
      <h4 className='permanent-marker' style={{ marginTop:'0px'}}>&lt; Schedule an Appointment /&gt;</h4>
        <Grid xs={12} >
        <a 
          href='https://calendly.com/' 
          target='_blank' 
          rel='noreferrer' 
          className='calendly-link' 
          aria-label='Schedul'
        >
          <Button variant="contained" size='small' style={{width: '6rem', backgroundColor: 'black', marginTop: '-20px'}}>
            Schedule
          </Button>
        </a>
        </Grid>
        
      {/* </section> */}
      </Grid>
  );
};

export default ScheduleAppointment;