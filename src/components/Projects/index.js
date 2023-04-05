

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';

// import components
import DisplayBox from '../DisplayBox';

const Project = () => {

  const projects = [
    { 
      title: 'Sam Hahn Travel',
      src: 'sht_home_desktop.png',
      alt: 'screenshot of app',
      description: 'Fully responsive web application for Sam Hahn Travel. Installable Progressive Web Application. Single Page Application. Users can browse the site for information about Sam Hahn Travel and the services they offer. Users can also contact Sam Hahn Travel via the contact form.',
      technologies: 'React, Material UI, JavaScript, HTML, CSS',
      appHref:'https://klong75.github.io/sam-hahn-travel',
      gitHref:'https://github.com/KLong75/sam-hahn-travel',
    },
    { 
      title: 'Vain Mainstream',
      src: 'vainmain-radio.png',
      alt: 'screenshot of app',
      description: 'The official web application for indie rock musician Vain Mainstream, promoting his latest tour and album. Users can listen to and download album tracks and watch videos from the tour. This single page React application is an installable progressive web app with offline functionality.',
      technologies: 'React, Material UI, JavaScript, HTML, CSS',
      appHref:'https://vainmainstream.com/',
      gitHref:'https://github.com/KLong75/vain-mainstream',
    },
    { 
      title: 'MUSICOLOGY',
      src: 'musicology-gif.gif',
      alt: 'screenshot of app',
      description: 'Full MERN stack application. A networking app for musicians. Users can sign up, create a profile describing their musical abilities and interests, make posts on the bulletin board, respond to posts made by other users, and connect with other musicians for creative and business purposes.',
      technologies: 'MongoDB, Express, React, Node.js, GraphQL, Mongoose, Bootstrap, Material UI, bcrypt, Apollo, React router, JSON web tokens, JavaScript, CSS',
      appHref:'https://musicology-umekev.herokuapp.com/',
      gitHref:'https://github.com/KLong75/musician-networking-app',
    },
    {
      title: 'Movies R Us',
      src: 'movies_r_us.gif',
      alt: 'screeenshot of app',
      description: "Allows a user to search titles by genre across all major subscription streaming services. When a user has selected a title to watch 'Movies 'R Us' links directly to the title for viewing on the application of the streaming service on which the title is available.",
      technologies: 'JavaScript, HTML, CSS, Bulma',
      appHref: 'https://klong75.github.io/Movies-R-Us-KJ/',
      gitHref: 'https://github.com/KLong75/Movies-R-Us-KJ',
    },
    {
      title: 'Who Do?',
      src: 'Who_Do_login.png',
      alt: 'screeenshot of app',
      description: 'An event sharing social media type application. Registered users can create and share events in the Austin area, discover events posted by other users, and RSVP to events they are interested in.',
      technologies: 'MySQL, Handlebars, Express.js, Node.js, bcrypt, Javascript, HTML, CSS',
      appHref: 'https://who-do-austin.herokuapp.com/login',
      gitHref: 'https://github.com/truppeiner/who-do',
    },

  ];



  return (
    <section>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} justifyContent='space-evenly' textAlign={'center'}> 
          {projects.map((project) => (  
            <Grid xs={12} sm={6} md={4} key={project.title} >
              
              <DisplayBox  elevation={12} style={{fontWeight: 'bold'}}>
      
                <Grid textAlign={'center'}>
                  <h4 
                    className='permanent-marker'
                    style={{fontSize: '1.5rem'}}
                    
                  >{(`"${project.title}"`)}</h4>
                </Grid>

                <Grid textAlign={'left'}>
                  <p >{(`${project.description}`)}</p>
                </Grid>

                <Grid textAlign={'left'}>
                  <p >{(`Technologies: ${project.technologies}`)}</p>
                </Grid>

                <Grid textAlign={'center'}>
                <a 
                  href={project.appHref} 
                  target='_blank' 
                  rel='noreferrer' 
                  >   
                    <div className='permanent-marker'>&lt; Deployed Application /&gt;</div>
                  </a>
                </Grid>

                <a 
                  href={project.gitHref} 
                  target='_blank' 
                  rel='noreferrer' 
                  >
                    <div className='permanent-marker'>&lt; GitHub Repository <GitHubIcon/> /&gt;
                    </div>    
                  </a>

               


               
              </DisplayBox>
            </Grid>
          ))} 
       </Grid>
       
      </Box> 
    </section>
  );
}

export default Project;