// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
// import styles
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"space-evenly"}
      style={{ marginTop: '', marginBottom: '' }}
    >
      {/* <Grid xs={12} style={{marginTop: '', marginBottom: ''}}>
        <h4 style={{margin: 0}}className="permanent-marker">&lt; My Contact Info /&gt;</h4>
      </Grid> */}

      <Grid className={styles.contactLinks} xs={12} sm={6} md={4} >
        <span>Location</span>
        <br />
        <a
          href="https://en.wikipedia.org/wiki/St._Louis"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to St. Louis Wikipedia Page"
        >
          <LocationOnIcon style={{ fontSize: '2rem'}} />
          <br/>
          <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>St. Louis, Missouri</span>
        </a>
        
      </Grid>

      <Grid className={styles.contactLinks} xs={12} sm={6} md={4}>
        <span>Phone</span>
        <br />
        <a href="tel:512-975-0082">
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",
            }}
          >
          <PhoneAndroidIcon style={{ fontSize: '2rem'}} />
          <br/>
            512-975-0082
          </span>
        </a>
      </Grid>

      <Grid className={styles.contactLinks} xs={12} sm={6} md={4}>
        <span>Email</span>
        <br />
        <a href="mailto:kevinlong.dev@gmail.com">
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",
            }}
          >
          <EmailIcon style={{ fontSize: '2rem'}} />
          <br/>
            kevinlong.dev@gmail.com
          </span>
        </a>
      </Grid>

      <Grid className={styles.contactLinks} xs={12} sm={6} md={4}>
        <span>Portfolio</span>
        <br />
        <a
          href="https://kevinlong.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Kevin's Portfolio"
        >
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",
            }}
          >
          <WorkIcon style={{ fontSize: '2rem'}} />
          <br/>
            kevinlong.dev
          </span>
        </a>
      </Grid>

      <Grid className={styles.contactLinks} xs={12} sm={6} md={4}>
        <span>GitHub</span>
        <br />
        <a
          href="https://github.com/KLong75"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Kevin's GitHub Profile"
        >
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",
            }}
          >
          <GitHubIcon style={{ fontSize: '2rem'}} />
          <br/>
            github.com/KLong75
          </span>
        </a>
      </Grid>

      <Grid xs={12} sm={6} md={4} className={styles.contactLinks}>
        <span>LinkedIn</span>
        <br />
        <a
          href="https://www.linkedin.com/in/kevinlongdev"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Kevin's LinkedIn Profile"
        >
          <span style={{ fontWeight: "bolder", textDecoration: "underline" }}
          >
          <LinkedIn style={{ fontSize: '2rem'}} />
            <br/>                                              
            linkedin.com/in/kevinlongdev
          </span>
        </a>
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
