// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
// import Header from '../../components/Header';
import TextType from "../../components/TextType";
import AboutCube from "../../components/AboutCube";

// import images




const AboutMe = () => {

  const phrases = [
    'A Full Stack Web Developer', 
    'A Teacher',
    'An Artist',
    'A Puppeteer',  
    'A Musician', 
    // 'A Problem Solver', 
    'A Marathon Runner',
    'A Hiker',
    'A Dog Person',
    'An Imperfect Human Being', 
    // 'working to do a little good in this world and have some fun along the way',
  ];


  return (
    <section>
      <Grid container spacing={2} justifyContent="center" textAlign='center' style={{marginTop: ''}}>
        <Grid xs={12} style={{marginTop: '', marginBottom: ''}}>
          <h2 className="permanent-marker" style={{marginTop: 0, marginBottom: 0}}>Hi. I'm Kevin.</h2>
          <span className="permanent-marker" style={{fontSize: '18px'}}>I am:</span>
          <h3 className="permanent-marker" style={{marginTop: 0, marginBottom: 0}}> <TextType typingSpeed={200} phrases={phrases} />.</h3>
        </Grid>

        <Grid xs={12} style={{marginTop: '', marginBottom: ''}}>
          <AboutCube />
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutMe;