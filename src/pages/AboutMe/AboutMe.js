// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
import DisplayBox from "../../components/DisplayBox";
// import Header from '../../components/Header';
// import TextType from "../../components/TextType";
// import AboutCube from "../../components/AboutCube";
// import TextFade from "../../components/TextFade";

// import images

const AboutMe = () => {
  

  return (
    <section>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        textAlign="center"
        style={{ marginTop: "" }}
      >
        <Grid xs={12} style={{ marginTop: "", marginBottom: "" }}>
          <h3
            className="permanent-marker"
            style={{ fontSize: "2rem", marginTop: 0, marginBottom: 0 }}
          >
            &lt; About Me /&gt;
          </h3>
          
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutMe;
