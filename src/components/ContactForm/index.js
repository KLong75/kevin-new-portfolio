// import from React
import React, { useState } from 'react';
// import from emailjs
import emailjs from '@emailjs/browser'
// import from react-toastify
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import from Material UI
import TextField from '@mui/material/TextField';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
// import components
import TyeDyeDarkBackground from '../TyeDyeDarkBackground';
// import images
import webDev from '../../assets/logos/devKevLogo.png';
// import from utils
import { validateEmail } from '../../utils/helpers';
// import styles
import styles from './ContactForm.module.css';


const ContactFormToast = ({message, icon}) => (
  <div>
    <img src={webDev} alt="" style={{width: '40%', height: 'auto', borderRadius: '50%', border: ''}}/>
    <p style={{color: '#black', fontSize: '20px', marginTop: '10px', fontWeight: 'bold'}} className='permanent-marker'>{message}</p>
    <TyeDyeDarkBackground />
  </div>
)


const ContactForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [interestedIn, setInterestedIn] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // const handleInterestedInChange = (e) => {
  //   setInterestedIn(e.target.value);
  // };



  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateEmail(email);
      if (!isValid) {   
        setErrorMessage('Please enter a valid email address.');
        return;
      } else {
        setErrorMessage('');
      }
    
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Message: ${message}, Interested In: ${interestedIn}`);

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      interestedIn: interestedIn
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      templateParams, 
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        // console.log(firstName, lastName, email, message, interestedIn);
        toast(<ContactFormToast style={{color: 'black' }} message='Thank you for your message! I will be in touch soon!' />);
      }, (error) => {
        console.log(error.text);
      });

    // clear input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setInterestedIn('');
  };



  return (
    <Grid container spacing={2} justifyContent='center' textAlign='center' >
    <Grid xs={12}>
    <form onSubmit={handleSubmit}>
      <h4
        className='permanent-marker' 
        style={{ 
          marginTop:'0px', 
          fontWeight: 'bolder'
        }}>&lt; Send Me a Message /&gt;
      </h4>
      <FormControl >
        <TextField 
          fullWidth 
          label='First Name' 
          required 
          value={firstName} 
          onChange={handleFirstNameChange} 
          size='small' 
          margin='dense' 
          style={{ 
            marginTop: '-10px', 
            width: '100%'
          }} 
        />
        <TextField 
          fullWidth 
          label='Last Name' 
          required value={lastName} 
          onChange={handleLastNameChange} 
          size='small' 
          margin='dense' 
        />
        <TextField 
          fullWidth
          label='Email Address' 
          required 
          value={email} 
          onChange={handleEmailChange} 
          size='small' 
          margin='dense' 
          error={errorMessage !== ''}
          helperText={<span style={{color: ''}}>{errorMessage}</span>}

        />
        <TextField label='Message' fullWidth required value={message} onChange={handleMessageChange} margin='dense' multiline rows={8}/>
        <FormLabel id="interested-in">Thank you for reaching out. I will get back to you right away!</FormLabel>
          {/* <RadioGroup
            aria-labelledby="interested-in"
            value={interestedIn}
            onChange={handleInterestedInChange}
            name="radio-buttons-group"
            style={{color: 'black'}}
          >
            <FormControlLabel value="Flight and Accommodation Booking/Group Booking" control={<Radio style={{color: 'black'}} />} label="Custom Website or App for your Creative Project" />
            <FormControlLabel value="Custom Travel Design" control={<Radio style={{color: 'black'}}/>} label="Custom Website or App for your Business" />
            <FormControlLabel value="Just Curious" control={<Radio style={{color: 'black'}}/>} label="Just Curious" />
          </RadioGroup> */}
          <br/>
        <Grid xs={12}>
        <Button 
          className={styles.submitButton}
          type='submit' 
          size='small' 
          
          variant='contained' 
          style={{
            width: '6rem', 
            backgroundColor:'black',
            marginTop: '-20px'
          }}
        >
          Submit
        </Button>
        </Grid>
      </FormControl>
    </form>
    </Grid>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        transition={Zoom}
        // theme="light"
        style={{ color: 'black'}}
      />
    </Grid>
  );
}

export default ContactForm;