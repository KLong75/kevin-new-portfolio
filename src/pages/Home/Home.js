// import from Material UI
// import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
// import AboutCube from "../../components/AboutCube";
// import TextFade from "../../components/TextFade";
// import DisplayBox from "../../components/DisplayBox";
// import ProgrammingIcons from "../../components/ProgrammingIcons";
// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import images
// import homeDevLogo from '../../assets/logos/permanentMarkerWebDevLogo2crop.png';


const Home = () => {
  return (
    <section>
      <Grid container spacing={4} textAlign={""} justifyContent="">
        {/* <Grid xs={12} >
            <TextFade fadeSpeed={3600} phrases={phrases} />
        </Grid> */}

        <Grid xs={12} textAlign="center">
          <h3
            className="permanent-marker"
            style={{
              fontSize: "2rem",
              margin: 0,
            }}
          >
            &lt; Welcome /&gt;
          </h3>
        </Grid>

        {/* <DisplayBox elevation={12}> */}

        <Grid 
          xs={12} 
          style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
          textAlign="center">
          <h4
            className="permanent-marker"
            style={{ fontWeight: "bold", fontSize: "1.25rem" }}
  
          >
            Currently Pursuing:
          </h4>
        </Grid>

        <Grid xs={12} style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>
          <p>
            Full Stack Web Developer. Based in Austin, Texas. Certificate in
            Full Stack Web Development from the University of Texas at Austin.
            With a background in the performing arts and education, I bring the
            passion and creativity of an artist alongside the patient
            persistence and skilled communication of a teacher, to my work as a
            software engineer. I thrive on creative problem-solving and
            collaboration. I love the challenge of attempting to answer the
            question, "What if...?"
          </p>
        </Grid>

        <Grid
          xs={12}
          textAlign="center"
          style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
        >
          <h5 className="permanent-marker">
            &lt; Let's build something great. /&gt;
          </h5>
        </Grid>

        {/* </DisplayBox> */}
      </Grid>

      {/* <Grid container textAlign='center' >
          <Grid xs={2}></Grid>
          <Grid xs={8}>
            <DisplayBox elevation={12}>
              <ProgrammingIcons />
            </DisplayBox>
          </Grid>
          <Grid xs={2}></Grid>
      </Grid> */}
    </section>
  );
};

export default Home;
