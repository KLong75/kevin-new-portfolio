// import from Material UI
import Grid from "@mui/material/Unstable_Grid2";

import htmlLogoGif from "../../assets/programming-icons/Html5b.gif";
import cssLogoGif from "../../assets/programming-icons/css3b.gif";
import javaScriptGif from "../../assets/programming-icons/javascriptb.gif";
import mongoGif from "../../assets/programming-icons/MongoDb.gif";
import expressGif from "../../assets/programming-icons/Express.gif";
import nodeGif from "../../assets/programming-icons/Nodejsb.gif";
import reactGif from "../../assets/programming-icons/Reactb.gif";
import materialUi from "../../assets/programming-icons/materialUi.png";
import gitHubGif from "../../assets/programming-icons/Github.gif";
import vsCodeGif from "../../assets/programming-icons/VSCode.gif";

const ProgrammingIcons = () => {
  return (
    <>
      <Grid container alignItems="center" style={{ padding: "" }}>
        <Grid xs={4}>
          <img width="50%" height="auto" src={javaScriptGif} alt="" />
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={htmlLogoGif} alt="" />
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={cssLogoGif} alt="" />
        </Grid>

        <Grid xs={3}>
          <img width="80%" height="auto" src={mongoGif} alt="" />
        </Grid>
        <Grid xs={3}>
          <img width="50%" height="auto" src={expressGif} alt="" />
        </Grid>
        <Grid xs={3}>
          <img width="80%" height="auto" src={reactGif} alt="" />
        </Grid>
        <Grid xs={3}>
          <img width="80%" height="auto" src={nodeGif} alt="" />
        </Grid>

        <Grid xs={4}>
          <img width="60%" height="auto" src={gitHubGif} alt="" />
        </Grid>
        <Grid xs={4}>
          <img width="60%" height="auto" src={materialUi} alt="" />
        </Grid>
        <Grid xs={4}>
          <img width="60%" height="auto" src={vsCodeGif} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default ProgrammingIcons;
