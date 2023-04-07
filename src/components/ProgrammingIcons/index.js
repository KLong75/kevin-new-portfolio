


// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';

import htmlLogoGif from '../../assets/programming-icons/Html5b.gif';
import cssLogoGif from '../../assets/programming-icons/css3b.gif';
import javaScriptGif from '../../assets/programming-icons/javascriptb.gif';
import mongoGif from '../../assets/programming-icons/MongoDb.gif';
import expressGif from '../../assets/programming-icons/Express.gif';
import nodeGif from '../../assets/programming-icons/Nodejsb.gif';
import reactGif from '../../assets/programming-icons/Reactb.gif';
import mySqlGif from '../../assets/programming-icons/Mysqlb.gif';
import materialUi from '../../assets/programming-icons/materialUi.png';
import bootstrapGif from '../../assets/programming-icons/Bootstrap.gif';
import gitHubGif from '../../assets/programming-icons/Github.gif';
import vsCodeGif from '../../assets/programming-icons/VSCode.gif';


const ProgrammingIcons = () => {
  
  return (
    <section style={{padding: ''}}>
      <Grid container direction='row' spacing={2} justifyContent="space-between" alignItems="center" style={{ padding: ''}}>
        <img width='16%' height='auto' src={javaScriptGif} alt="" />
        <img width='16%' height='auto' src={htmlLogoGif} alt="" />
        <img width='16%' height='auto' src={cssLogoGif} alt="" />
      </Grid>

      <Grid container direction='row' spacing={2} justifyContent="space-between" alignItems="center" style={{ marginBottom: '.75rem'}}>
        <img width='20%' height='auto' src={mongoGif} alt="" />
        <img width='18%' height='auto' src={expressGif} alt="" />
        <img width='20%' height='auto' src={reactGif} alt="" />
        <img width='20%' height='auto' src={nodeGif} alt="" />
      </Grid>

      <Grid container direction='row' spacing={2} justifyContent="space-between" alignItems="center" style={{ padding: ''}}>
        <img width='18%' height='auto' src={mySqlGif} alt="" />  
        <img width='18%' height='auto' src={bootstrapGif} alt="" />
        <img width='18%' height='auto' src={materialUi} alt="" />
        <img width='18%' height='auto' src={gitHubGif} alt="" />
        <img width='18%' height='auto' src={vsCodeGif} alt="" />
      </Grid>
    </section>
  );
};

export default ProgrammingIcons;