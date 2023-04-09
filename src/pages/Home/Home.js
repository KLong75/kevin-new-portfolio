// import from Material UI
// import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
import AboutCube from "../../components/AboutCube";
import TextFade from "../../components/TextFade";

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import images
// import homeDevLogo from '../../assets/logos/permanentMarkerWebDevLogo2crop.png';


const phrases = [
  "A Full Stack Web Developer",
  "A Teacher",
  "A Puppeteer",
  "A Musician",
  "A Long Distance Runner",
  "A Marathon Finisher",
  // 'A Hiker',
  // 'A Dog Person',
  "A Stilt Walker",
];


const Home = () => {

  return (
    <section>

      <Grid container spacing={2} textAlign={'center'} justifyContent='center'>
        <Grid xs={12} style={{marginTop: '-2rem', fontSize: '1.25rem'}}>
        <span className="permanent-marker" style={{ fontSize: "1.25rem" }}>
            I am
          </span>
          <p
            className="permanent-marker"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            {" "}
            <TextFade fadeSpeed={3600} phrases={phrases} />
          </p>
        </Grid>
        <Grid xs={12} >
          <AboutCube />
        </Grid>
      </Grid>

    </section>
  );
};

export default Home;