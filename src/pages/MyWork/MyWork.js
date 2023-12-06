// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import Projects from '../../components/Projects';


const MyWork = () => {
    return (
        <section>
          <Grid container spacing={2} justifyContent="center" textAlign='center' style={{marginTop: '-2rem'}}>

            <Grid xs={12} >
              <h3 className='permanent-marker' style={{fontSize: '2rem', margin: 0}}>&lt; My Projects /&gt;</h3>
            </Grid>
            
          </Grid>

          <Projects/>
        </section>
    )
};

export default MyWork;