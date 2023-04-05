// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import Projects from '../../components/Projects';


const MyWork = () => {
    return (
        <section>
          <Grid container spacing={2} justifyContent="center" textAlign='center' style={{marginTop: 'center'}}>
            <Grid xs={12} >
            <h2>My Projects</h2>
            </Grid>
            
          </Grid>
          <Projects/>
        </section>
    )
};

export default MyWork;