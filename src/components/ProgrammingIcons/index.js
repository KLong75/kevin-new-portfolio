// import from Material UI
import Grid from "@mui/material/Unstable_Grid2";

import htmlLogoGif from "../../assets/programming-icons/html5.png";
import cssLogoGif from "../../assets/programming-icons/css3.png";
import javaScriptGif from "../../assets/programming-icons/javascript.png";
import mongoGif from "../../assets/programming-icons/mongodb.png";
import expressGif from "../../assets/programming-icons/express.png";
import nodeGif from "../../assets/programming-icons/nodejs.png";
import reactGif from "../../assets/programming-icons/react.png";
import materialUi from "../../assets/programming-icons/materialUi.png";
import gitHubGif from "../../assets/programming-icons/github.png";
import vsCodeGif from "../../assets/programming-icons/vscode.png";

const ProgrammingIcons = () => {
  return (
    <>
      <Grid container alignItems="center" style={{ padding: "" }} >
        <Grid xs={4}>
          <img width="50%" height="auto" src={javaScriptGif} alt="" style={{minWidth: '2rem'}} />
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={htmlLogoGif} alt="" style={{minWidth: '2rem'}}/>
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={cssLogoGif} alt="" style={{minWidth: '2rem'}}/>
        </Grid>

        <Grid xs={3}>
          <img width="80%" height="auto" src={reactGif} alt="" style={{minWidth: '2rem'}}/>
        </Grid>
        <Grid xs={3}>
          <img width="80%" height="auto" src={nodeGif} alt="" style={{minWidth: '2rem', marginRight: '.25rem'}}/>
        </Grid>
        <Grid xs={3}>
          <img width="50%" height="auto" src={expressGif} alt=""  style={{minWidth: '2rem'}}/>
        </Grid>
        <Grid xs={3}>
          <img width="80%" height="auto" src={mongoGif} alt="" style={{minWidth: '2rem', marginLeft: '-.25rem'}} />
        </Grid>
        
        
       
       

        <Grid xs={4}>
          <img width="50%" height="auto" src={materialUi} alt="" style={{minWidth: '2rem'}} />
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={gitHubGif} alt="" style={{minWidth: '2rem'}}/>
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={vsCodeGif} alt="" style={{minWidth: '2rem'}}/>
        </Grid>
      </Grid>
    </>
  );
};

export default ProgrammingIcons;
