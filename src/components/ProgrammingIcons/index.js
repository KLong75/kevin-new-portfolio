// import from Material UI
import Grid from "@mui/material/Unstable_Grid2";

import htmlLogo from "../../assets/programming-icons/html5.png";
import cssLogo from "../../assets/programming-icons/css3.png";
import javaScriptIcon from "../../assets/programming-icons/javascript.png";
import mongoIcon from "../../assets/programming-icons/mongodb.png";
import expressIcon from "../../assets/programming-icons/express.png";
import nodeIcon from "../../assets/programming-icons/nodejs.png";
import reactIcon from "../../assets/programming-icons/react.png";
import materialUi from "../../assets/programming-icons/materialUi.png";
import gitHubIcon from "../../assets/programming-icons/github.png";
import vsCodeIcon from "../../assets/programming-icons/vscode.png";

const ProgrammingIcons = () => {
  return (
    <>
      <Grid container alignItems="center" style={{ padding: "" }} >
        <Grid xs={4}>
          <img width="50%" height="auto" src={javaScriptIcon} alt="" style={{minWidth: '2rem'}} />
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={htmlLogo} alt="" style={{minWidth: '2rem'}}/>
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={cssLogo} alt="" style={{minWidth: '2rem'}}/>
        </Grid>

        <Grid xs={3}>
          <img width="80%" height="auto" src={reactIcon} alt="" style={{minWidth: '2rem'}}/>
        </Grid>
        <Grid xs={3}>
          <img width="80%" height="auto" src={nodeIcon} alt="" style={{minWidth: '2rem', marginRight: '.25rem'}}/>
        </Grid>
        <Grid xs={3}>
          <img width="50%" height="auto" src={expressIcon} alt=""  style={{minWidth: '2rem'}}/>
        </Grid>
        <Grid xs={3}>
          <img width="80%" height="auto" src={mongoIcon} alt="" style={{minWidth: '2rem', marginLeft: '-.25rem'}} />
        </Grid>
        
        
       
       

        <Grid xs={4}>
          <img width="50%" height="auto" src={materialUi} alt="" style={{minWidth: '2rem'}} />
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={gitHubIcon} alt="" style={{minWidth: '2rem'}}/>
        </Grid>
        <Grid xs={4}>
          <img width="50%" height="auto" src={vsCodeIcon} alt="" style={{minWidth: '2rem'}}/>
        </Grid>
      </Grid>
    </>
  );
};

export default ProgrammingIcons;
