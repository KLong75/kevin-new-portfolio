// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
import ContactInfo from "../ContactInfo";

const Footer = () => {
  return (
    <footer>
    <Grid container spacing={2} justifyContent="center" textAlign='center' style={{marginTop: '10px'}}>

      <Grid xs={12} style={{marginTop: '10px', marginBottom: ''}}>
        <ContactInfo />
      </Grid>

      <Grid xs={12} style={{marginTop: '-20px', marginBottom: '10px', fontSize: '18px'}}>
        <span> ©2023 </span>
      </Grid>

    </Grid>
  </footer>  
  );
};

export default Footer;