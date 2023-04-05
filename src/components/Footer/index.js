// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
import ContactIcons from "../ContactIcons";

const Footer = () => {
  return (
    <footer>
    <Grid container spacing={2} justifyContent="center" textAlign='center' style={{marginTop: '10px'}}>

      <Grid xs={12} style={{marginTop: '10px', marginBottom: ''}}>
        <ContactIcons />
      </Grid>

      <Grid xs={12} style={{marginTop: '-20px', marginBottom: '10px', fontSize: '18px'}}>
        <span> ©2023 </span>
      </Grid>

      <Grid xs={12} style={{marginTop: '-20px', marginBottom: '10px', fontSize: '18px'}}>
        <a href="https://kevinlong.dev/" target="_blank" rel="noreferrer">
          <span className="permanent-marker">www.kevinlong.dev</span>
        </a>  
      </Grid>

    </Grid>
  </footer>  
  );
};

export default Footer;