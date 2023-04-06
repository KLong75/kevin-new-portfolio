// import from Material UI
// import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
// import TyeDyeDarkBackground from '../../components/TyeDyeDarkBackground';
// import WebDevLogo from '../../components/WebDevLogo';
// import TextType from "../../components/TextType";
// import FloatingBalls from '../../components/FloatingBalls';

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import images
import homeDevLogo from '../../assets/logos/permanentMarkerWebDevLogo2crop.png';





const Home = () => {

  

  return (
    <section>

      <Grid container textAlign={'center'}>
        <Grid xs={12} >
          <img src={homeDevLogo} alt="web development icon" style={{ width: '24%', height: 'auto' }} />
        </Grid>
      </Grid>

    </section>
  );
};

export default Home;