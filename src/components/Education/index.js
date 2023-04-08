// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Education = () => {
  return (
    <Grid container justifyContent={'space-evenly'} style={{marginTop: '.5rem', marginBottom: '.5rem'}}>
      <Grid xs={12} lg={2} >
        <span style={{ fontWeight: "bold"}}>
          Certificate in Full Stack Web Development
        </span>
      </Grid>

      <Grid xs={12} lg={2}>
        <span style={{ fontWeight: "bold" }}>University of Texas</span>
      </Grid>

      <Grid xs={12} lg={2} style={{marginBottom: '1rem'}}>
        <span style={{ fontWeight: "bold" }}>Austin, Texas</span>
      </Grid>

      {/* <Grid xs={12} style={{marginBottom: '1rem'}}>
        <span>
          A 24-week intensive program focused on gaining technical programming
          skills in Full Stack Web Development
        </span>
      </Grid> */}

      <Grid xs={12} style={{marginBottom: '1rem'}}><span>-</span></Grid>

      <Grid xs={12} lg={2}>
        <span style={{ fontWeight: "bold" }}>
        Bachelor of Arts - Theater Arts
        </span>
      </Grid>

      <Grid xs={12} lg={2}>
        <span style={{ fontWeight: "bold" }}>Truman State University</span>
      </Grid>

      <Grid xs={12} lg={2}>
        <span style={{ fontWeight: "bold" }}>Kirksville, Missouri</span>
      </Grid>

    </Grid>


  );
};

export default Education;
