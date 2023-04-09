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

      <Grid xs={12} style={{fontSize: '1rem'}}>
        <span> ©2023 </span>
      </Grid>

      <Grid xs={12} style={{marginTop: '-1rem', marginBottom: '1rem', fontSize: '1.25rem'}}>
        <a href="https://kevinlong.dev/" target="_blank" rel="noreferrer">
          <span className="permanent-marker">www.kevinlong.dev</span>
        </a>  
      </Grid>

    </Grid>
  </footer>  
  );
};

export default Footer;