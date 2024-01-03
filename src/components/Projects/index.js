// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";

// import components
import DisplayBox from "../DisplayBox";

// import images
import shtDesktop from "../../assets/images/projectImages/shtDesktop.png";
import shtMobile from "../../assets/images/projectImages/shtMobile.png";
import vainMainMobile from "../../assets/images/projectImages/vainMainMobile.png";
import vainMainDesktop from "../../assets/images/projectImages/vainMainDesktop.png";
import musicologyDesktop from "../../assets/images/projectImages/musicologyDesktop.gif";
import musicologyMobile from "../../assets/images/projectImages/musicologyMobile.jpg";
import watchTVMobile from "../../assets/images/projectImages/watchTVLandingMobile.png";
// import moviesMobile from '../../assets/images/projectImages/moviesMobile.jpg';
import watchTVDesktop from "../../assets/images/projectImages/rogueOne.png";
// import whoDoMobile from '../../assets/images/projectImages/whoDoMobile.jpg';
// import whoDoDesktop from '../../assets/images/projectImages/whoDoDesktop.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { faGlobe, faVolumeHigh, faMusic } from "@fortawesome/free-solid-svg-icons";
// import styles
import styles from "./Projects.module.css";

const Project = () => {
  const projects = [
    {
      title: "WatchTV",
      src: "rogueOne.png",
      alt: "screenshot of app",
      description:
        "React. Node. MongoDB. Express. Full stack application. Serves as a central hub for all of a user's subscription streaming accounts. Search for any TV show or movie and link to where it is available online to stream, rent, or buy. Multiple search methods enable users to find what they want to watch and where they can watch it. Users can search all sources or just the ones they are subscribed to. Save titles to a watchlist for later viewing. The watchlist can be filtered by source, type, and genre.",
      technologies:
        "React, Node, MongoDB, Express, Material UI, React Router, React Context, Apollo, GraphQL, JSON web tokens, bcrypt, Mongoose, Swiperjs, JavaScript, HTML, CSS,",
      appHref: "https://streamhub-e4fc2af8fdfc.herokuapp.com/",
      gitHref: "https://github.com/KLong75/stream-hub",
      mobile_img_src: `${watchTVMobile}`,
      desktop_img_src: `${watchTVDesktop}`,
      guest_username: "email: guest@email.com",
      guest_password: "password: Guest#1",
    },
    {
      title: "MUSICOLOGY",
      src: "musicology-gif.gif",
      alt: "screenshot of app",
      description:
        "React. Node. MongoDB. Express. Full stack application. A networking app for musicians. Users can sign up, create a profile describing their musical abilities and interests, make posts on the bulletin board, respond to posts made by other users, and connect with other musicians for creative and business purposes.",
      technologies:
        "MongoDB, Express, React, Node.js, GraphQL, Mongoose, Bootstrap, Material UI, bcrypt, Apollo, React router, JSON web tokens, JavaScript, CSS",
      appHref: "https://musicology-umekev.herokuapp.com/",
      gitHref: "https://github.com/KLong75/musician-networking-app",
      mobile_img_src: `${musicologyMobile}`,
      desktop_img_src: `${musicologyDesktop}`,
    },
    {
      title: "Vain Mainstream",
      src: "vainmain-radio.png",
      alt: "screenshot of app",
      description:
        "The official web application for indie rock musician Vain Mainstream, promoting his latest tour and album. Users can listen to and download album tracks and watch videos from the tour. This fully responsive single page React application is an installable progressive web app with offline functionality.",
      technologies: "React, Material UI, JavaScript, HTML, CSS",
      appHref: "https://vainmainstream.com/",
      gitHref: "https://github.com/KLong75/vain-mainstream",
      mobile_img_src: `${vainMainMobile}`,
      desktop_img_src: `${vainMainDesktop}`,
    },
    {
      title: "Sam Hahn Travel",
      src: "sht_home_desktop.png",
      alt: "screenshot of app",
      description:
        "Fully responsive web application for Sam Hahn Travel. Installable Progressive Web Application. Single Page Application. Users can browse the site for information about Sam Hahn Travel and the services they offer. Users can also contact Sam Hahn Travel via the contact form.",
      technologies:
        "React, React router, Material UI, JavaScript, HTML, CSS, Email.js",
      appHref: "https://klong75.github.io/sam-hahn-travel",
      gitHref: "https://github.com/KLong75/sam-hahn-travel",
      mobile_img_src: `${shtMobile}`,
      desktop_img_src: `${shtDesktop}`,
    },
  ];

  return (
    <section>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={4}
          justifyContent="space-evenly"
          textAlign={"center"}>
          {projects.map((project) => (
            <Grid sm={12} md={6} lg={5} key={project.title}>
              <DisplayBox elevation={12} style={{ fontWeight: "bold" }}>
                <Grid textAlign={"center"}>
                  <h4
                    className="permanent-marker"
                    style={{
                      fontSize: "1.5rem",
                      margin: "0",
                      padding: "0",
                      fontWeight: "bold",
                      marginBottom: "-1rem",
                    }}>{`"${project.title}"`}</h4>
                </Grid>

                <Grid textAlign={"left"}>
                  <p style={{ margin: "0" }}>
                    <span className="permanent-marker">Technologies:</span>
                    {` ${project.technologies}`}
                  </p>
                </Grid>

                <Grid>
                  <a href={project.appHref} target="_blank" rel="noreferrer">
                    <img
                      className={styles.projectMobileImage}
                      src={project.mobile_img_src}
                      alt={project.alt}
                    />
                  </a>
                  <br></br>
                  <span>Mobile View</span>
                </Grid>

                <Grid>
                  <a href={project.appHref} target="_blank" rel="noreferrer">
                    <img
                      src={project.desktop_img_src}
                      alt={project.alt}
                      className={styles.projectDesktopImage}
                    />
                  </a>
                  <br></br>
                  <span>Desktop View</span>
                </Grid>

                <Grid
                  textAlign={"left"}
                  style={{ marginTop: "-2rem", marginBottom: "-2.5rem" }}>
                  <p>
                    <span className="permanent-marker">Description:</span>{" "}
                    {`${project.description}`}
                  </p>
                </Grid>

                {
  project.guest_username && project.guest_password && (
    <Grid textAlign={"left"}>
      <p>
        <span className="permanent-marker">Guest Login:</span>
        <br />
        <span>{project.guest_username}</span> 
        <br />
        <span>{project.guest_password}</span>
      </p>
    </Grid>
  )
}


                <Grid style={{ marginBottom: "-1.5rem", marginTop: "-2rem" }}>
                  <span className="permanent-marker">Links:</span>
                </Grid>

                <Grid textAlign={"center"}>
                  <a href={project.appHref} target="_blank" rel="noreferrer">
                    <div
                      className={`${styles.projectLink} permanent-marker`}
                      style={{ marginBottom: ".5rem" }}>
                      &lt; Deployed Application /&gt;
                    </div>
                  </a>
                  <a
                    className={styles.projectLink}
                    href={project.gitHref}
                    target="_blank"
                    rel="noreferrer">
                    <div className={`${styles.projectLink} permanent-marker`}>
                      &lt; GitHub Repository{" "}
                      <GitHubIcon style={{ marginBottom: "-.25rem" }} /> /&gt;
                    </div>
                  </a>
                </Grid>
              </DisplayBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Project;
