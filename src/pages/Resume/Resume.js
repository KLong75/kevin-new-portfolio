// import components
// import Header from '../../components/Header';
import ProgrammingIcons from "../../components/ProgrammingIcons";
import DisplayBox from "../../components/DisplayBox";
import ContactInfo from "../../components/ContactInfo";
import Education from "../../components/Education";

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import pdf
import pdf from "../../assets/resume/Kevin_Long_Resume.pdf";

// import images
import shtDesktop from "../../assets/images/projectImages/shtDesktop.png";
import shtMobile from "../../assets/images/projectImages/shtMobile.png";
import vainMainMobile from "../../assets/images/projectImages/vainMainMobile.png";
import vainMainDesktop from "../../assets/images/projectImages/vainMainDesktop.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import styles from "./Resume.module.css";

const projects = [
  {
    title: "Sam Hahn Travel",
    src: "sht_home_desktop.png",
    alt: "screenshot of app",
    description:
      "Fully responsive web application for Sam Hahn Travel. Installable Progressive Web Application. Single Page Application. Users can browse the site for information about Sam Hahn Travel and the services they offer. Users can also contact Sam Hahn Travel via the contact form.",
    technologies: "React, Material UI, JavaScript, HTML, CSS",
    appHref: "https://klong75.github.io/sam-hahn-travel",
    appLinkText: "klong75.github.io/sam-hahn-travel",
    gitHref: "https://github.com/KLong75/sam-hahn-travel",
    gitLinkText: "github.com/KLong75/sam-hahn-travel",
    mobile_img_src: `${shtMobile}`,
    desktop_img_src: `${shtDesktop}`,
  },
  {
    title: "Vain Mainstream",
    src: "vainmain-radio.png",
    alt: "screenshot of app",
    description:
      "The official web application for indie rock musician Vain Mainstream, promoting his latest tour and album. Users can listen to and download album tracks and watch videos from the tour. This fully responsive single page React application is an installable progressive web app with offline functionality.",
    technologies: "React, Material UI, JavaScript, HTML, CSS",
    appHref: "https://vainmainstream.com/",
    appLinkText: "vainmainstream.com",
    gitHref: "https://github.com/KLong75/vain-mainstream",
    gitLinkText: "github.com/KLong75/vain-mainstream",
    mobile_img_src: `${vainMainMobile}`,
    desktop_img_src: `${vainMainDesktop}`,
  },
];

const jobs = [
  {
    title: "Software Engineer",
    company: "Self-Employed",
    type: "Freelance",
    location: "Remote",
    dates: "Jan 2022 - Present",
    description:
      "Design, Develop, Update, and Maintain reaponsive web applications based on client specifications.",
    keyAccomplishments: [""],
  },
  {
    title: "Bootcamp Teaching Assistant - Full Stack Web Development",
    company: "edX",
    type: "Part Time",
    location: "Remote",
    dates: "Oct 2022 - Present",
    description:
      "Assist with instruction during class sessions, support students with class activities, homework assignments, projects, and technical issues.",
    keyAccomplishments: [
      "Plan and facilitate bi-weekly homework help sessions based on student need resulting in a 15% increase in student homework submissions.",
    ],
  },
  {
    title: "Elementary School Teacher",
    company: "Austin Discovery School",
    type: "Fulltime",
    location: "Austin, TX (Remote and In-Person)",
    dates: "2020 - 2021",
    description:
      "Utilized clear communication and critical thinking skills to develop and implement lesson plans for all subjects across two grade levels.",
    keyAccomplishments: [
      "Used no-code platform Seesaw in conjunction with several other learning applications to successfully develop and implement an innovative online learning system for virtual learning, allowing students to learn effectively from home with minimal hands on support from parents and guardians.",
    ],
  },
  {
    title: "Theater Artist",
    company: "Various Companies, Artists, and Organizations",
    type: "Contract",
    location: "Various Locations",
    dates: "1998 - 2019",
    description:
      "Worked with several theater companies in various capacities including puppeteer, actor, director, technical director, lighting designer, set designer, and theater technician.",
    keyAccomplishments: [
      `Performed in 18 states and 2 foreign countries (South Korea and The Dominican Republic)`,
      `Staff Artist for MayDay Parade and Festival (2001, 2006 - 2012) - annual outdoor giant puppet spectacle produced by In The Heart of the Beast Puppet and Mask Theater involving hundreds of performers and attended by tens of thousands in Minneapolis, MN.`,
      `While on the Mayday Staff worked to streamline the post parade clean up process, resulting in a 20% reduction in clean up time.`,
    ],
  },
];

const Resume = () => {
  return (
    <>
      <Grid container textAlign={"center"} style={{ padding: ".25rem" }}>
        <Grid xs={12}>
          <h2
            style={{ margin: "0", fontSize: "2rem" }}
            className="permanent-marker"
          >
            &lt; Resume /&gt;
          </h2>
          <a href={pdf} download="Kevin Long Web Developer Resume">
            <span className={`permanent-marker ${styles.resumeDownload}`}>
              &lt; Click here to download a PDF of my resume. /&gt;
            </span>
          </a>
        </Grid>
      </Grid>

      <Grid container textAlign={"center"} style={{ padding: ".25rem" }}>
        <Grid xs={12}>
          <DisplayBox elevation={12}>
            <Grid xs={12} style={{ marginTop: "-1rem" }}>
              <h3
                style={{
                  marginTop: "",
                  marginBottom: "1rem",
                  fontSize: "2rem",
                }}
                className="permanent-marker"
              >
                Kevin Long
              </h3>
              <FontAwesomeIcon
                style={{ fontSize: "1.75rem" }}
                icon={icon({ name: "user-gear", style: "solid" })}
              />

              <Grid
                container
                textAlign="center"
                justifyContent={"center"}
                spacing={1}
                style={{ marginBottom: ".5rem" }}
              >
                <Grid xs={12} md={8}>
                  <DisplayBox elevation={12}>
                    <ContactInfo />
                  </DisplayBox>
                </Grid>
              </Grid>
            </Grid>

            {/* <Grid container spacing={1} style={{marginBottom: '.5rem'}}>
              <DisplayBox elevation={12}>
                <Grid xs={12}>
                  <FontAwesomeIcon icon={icon({ name: "folder-open", style: "regular" })}/>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <span style={{ fontWeight: "bold" }}>Austin, TX</span>
                </Grid>
                <br></br>
                <Grid xs={12} sm={6} md={4}>
                  <a href="tel:512-975-0082">
                    <span>Phone: </span>
                    <span
                      style={{
                        fontWeight: "bolder",
                        textDecoration: "underline",
                      }}
                    >
                      512-975-0082
                    </span>
                  </a>
                </Grid>
                <br></br>
                <Grid xs={12} sm={6} md={4}>
                  <a href="mailto:kevinjlong75@gmail.com.com">
                    <span>Email: </span>
                    <span
                      style={{
                        fontWeight: "bolder",
                        textDecoration: "underline",
                      }}
                    >
                      kevinjlong75@gmail.com
                    </span>
                  </a>
                </Grid>
                <br></br>
                <Grid xs={12} sm={6} md={4}>
                  <a
                    href="https://www.linkedin.com/in/klong75/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to Kevin's LinkedIn Profile"
                  >
                    <span>
                      LinkedIn:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          textDecoration: "underline",
                        }}
                      >
                        linkedin.com/in/klong75
                      </span>
                    </span>
                  </a>
                </Grid>
                <br></br>
                <Grid xs={12} sm={6} md={4}>
                  <a
                    href="https://kevinlong.dev"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to Kevin's Portfolio"
                  >
                    <span>
                      Portfolio:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          textDecoration: "underline",
                        }}
                      >
                        kevinlong.dev
                      </span>
                    </span>
                  </a>
                </Grid>
                <br></br>
                <Grid xs={12} sm={6} md={4}>
                  <a
                    href="https://github.com/KLong75"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to Kevin's GitHub Profile"
                  >
                    <span>
                      GitHub:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          textDecoration: "underline",
                        }}
                      >
                        github.com/KLong75
                      </span>
                    </span>
                  </a>
                </Grid>
              </Grid> */}
            {/* </DisplayBox>
          </Grid> */}

            <Grid xs={12}>
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "",
                }}
                className="permanent-marker"
              >
                Summary
              </h4>
            </Grid>

            <Grid container>
              <Grid sm={12} md={2}></Grid>
              <Grid sm={12} md={8}>
                <DisplayBox elevation={12}>
                  <Grid sm={12} style={{ marginBottom: "-1.5rem" }}>
                    <FontAwesomeIcon
                      style={{ fontSize: "1.5rem" }}
                      icon={icon({ name: "folder-open", style: "regular" })}
                    />
                  </Grid>
                  <Grid sm={12}>
                    <p style={{ padding: ".5rem" }}>
                      Full Stack Software Engineer. Based in Austin, TX.
                      Background in the performing arts and education. Brings
                      the passion and creativity of an artist, combined with the
                      patient persistence, and skilled communication of a teacher,
                      to work as a software engineer. Thrives on creative
                      problem-solving and collaboration. Experienced at meeting
                      deadlines under pressure. Loves the challenge of bringing
                      "What if?" to life.
                    </p>
                  </Grid>
                </DisplayBox>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                }}
                className="permanent-marker"
              >
                Education
              </h4>
            </Grid>
            <Grid container>
              <Grid sm={12} md={2}></Grid>
              <Grid sm={12} md={8}>
                <DisplayBox elevation={12}>
                  <Education />
                </DisplayBox>
              </Grid>
            </Grid>

            <Grid xs={12}>
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                }}
                className="permanent-marker"
              >
                Technical Skills
              </h4>
            </Grid>
            <Grid container>
              <Grid sm={12} md={2}></Grid>
              <Grid sm={12} md={8}>
                <DisplayBox elevation={12}>
                  <Grid
                    container
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: ".5rem",
                      fontSize: ".89rem",
                    }}
                  >
                    <Grid xs={12} sm={6} md={4} lg={3}>
                      JavaScript ES6{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "square-js", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      HTML5{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "html5", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      CSS{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "css3-alt", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Responsive Web Design{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "mobile-alt", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Agile Methodology{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "tasks", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Command Line{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "terminal", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Node{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "node", style: "brands" })}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Express{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "node-js", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      React{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "react", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      React Hooks{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "react", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      React Context API{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "react", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      React Router{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "react", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Material UI{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "react", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Bootstrap{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "bootstrap", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      MongoDB{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "database", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Mongoose{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "database", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      SQL{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "database", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Sequelize{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "database", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      MySQL{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "database", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      GitHub{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "github", style: "brands" })}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Git Version Control{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "git-alt", style: "brands" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Heroku{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "git-alt", style: "brands" })}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                      bcrypt{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "key", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      JSON web tokens{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "key", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      RESTful APIs{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "code", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Handlebars{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "code", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      jQuery{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "code", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Object-Oriented Programming{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "code", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Test Driven Development{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "code", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Model-View-Controller(MVC){" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "code", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      PWA{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "mobile-alt", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      Service Workers{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "mobile-alt", style: "solid" })}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} lg={3}>
                      IndexedDB{" "}
                      <FontAwesomeIcon
                        icon={icon({ name: "mobile-alt", style: "solid" })}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid xs={2}></Grid>
                    <Grid xs={8} style={{ marginTop: "2rem" }}>
                      <ProgrammingIcons />
                    </Grid>
                    <Grid xs={2}></Grid>
                  </Grid>
                </DisplayBox>
              </Grid>
            </Grid>

            <Grid xs={12}>
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: 0,
                }}
                className="permanent-marker"
              >
                Relevant Work Experience
              </h4>
            </Grid>
            <Grid container textAlign={""}>
              <Grid sm={12} md={2}></Grid>
              <Grid sm={12} md={8}>
                <DisplayBox elevation={12}>
                  <Grid
                    container
                    spacing={1}
                    textAlign={"center"}
                    style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}
                  >
                    <Grid xs={12} sm={6} md={3}>
                      <span style={{ fontWeight: "bold" }}>
                        Software Engineer
                      </span>
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                      <span style={{ fontWeight: "bold" }}>Freelance</span>
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                      <span style={{ fontWeight: "bold" }}>Part Time</span>
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                      <span style={{ fontWeight: "bold" }}>
                        Oct. 2022 - Present
                      </span>
                    </Grid>

                    <Grid
                      xs={12}
                      style={{ fontSize: "2rem", marginBottom: "-1rem" }}
                    >
                      <FontAwesomeIcon
                        icon={icon({ name: "gear", style: "solid" })}
                      />
                    </Grid>
                  </Grid>
                  <p style={{ marginLeft: "" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Responsibilities:{" "}
                    </span>
                    Design, Develop, Update, and Maintain fully responsive web
                    sites and web applications that meet client specifications,
                    exceed client expectations, function well, are intuitive to
                    use, and look great on any screen size.
                  </p>

                  <p style={{ marginLeft: "", fontWeight: "bold", fontSize: '1.25rem' }}>
                    Current Clients:
                  </p>
                  <ul style={{ marginTop: 0, marginLeft: "", paddingRight: '', listStyle: 'none' }}>
                    <li style={{ fontWeight: "bold" }}>
                      <a
                        href={projects[0].appHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {projects[0].title}
                      </a>
                    </li>
                    <span>
                      Deployed Application:
                      <a
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          fontSize: '.9rem'
                        }}
                        href={projects[0].appHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {projects[0].appLinkText}
                      </a>
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      GitHub Repository:
                      <a
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          fontSize: '.9rem'
                        }}
                        href={projects[0].gitHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {projects[0].gitLinkText}
                      </a>
                    </span>
                    <br></br>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                      {projects[0].description}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Technologies:</span>{" "}
                      {projects[0].technologies}
                    </p>

                    <li style={{ fontWeight: "bold" }}>
                      <a
                        style={{ fontWeight: "bold" }}
                        href={projects[1].appHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {projects[1].title}
                      </a>
                    </li>
                    <span>
                      Deployed Application:
                      <a
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          fontSize: '.9rem'
                        }}
                        href={projects[1].appHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {projects[1].appLinkText}
                      </a>
                    </span>
                    <br></br>
                    <span>
                      GitHub Repository:
                      <a
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          fontSize: '.9rem'
                        }}
                        href={projects[1].gitHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {projects[1].gitLinkText}
                      </a>
                    </span>
                    <br></br>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                      {projects[1].description}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Technologies:</span>{" "}
                      {projects[1].technologies}
                    </p>
                  </ul>
                </DisplayBox>
              </Grid>

              <Grid container textAlign={""}>
                <Grid sm={12} md={2}></Grid>
                <Grid sm={12} md={8}>
                  <DisplayBox elevation={12}>
                    <Grid
                      container
                      spacing={1}
                      textAlign={"center"}
                      style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}
                    >
                      <Grid xs={12} sm={6} md={3}>
                        <span style={{ fontWeight: "bold" }}>
                          {jobs[1].title}
                        </span>
                      </Grid>

                      <Grid xs={12} sm={6} md={3}>
                        <span style={{ fontWeight: "bold" }}>
                          {jobs[1].company}
                        </span>
                      </Grid>

                      <Grid xs={12} sm={6} md={3}>
                        <span style={{ fontWeight: "bold" }}>
                          {jobs[1].type}
                        </span>
                      </Grid>

                      <Grid xs={12} sm={6} md={3}>
                        <span style={{ fontWeight: "bold" }}>
                          {jobs[1].dates}
                        </span>
                      </Grid>

                      <Grid
                        xs={12}
                        style={{ fontSize: "2rem", marginBottom: "-1rem" }}
                      >
                        <FontAwesomeIcon
                          icon={icon({ name: "gear", style: "solid" })}
                        />
                      </Grid>
                    </Grid>

                    <p style={{ marginLeft: "" }}>
                      <span style={{ fontWeight: "bold" }}>
                        Responsibilities:{" "}
                      </span>
                      {jobs[1].description}
                    </p>
                    <span style={{ fontWeight: "bold" }}>
                      Key Accomplishment:
                    </span>
                    <ul style={{ marginTop: 0, listStyle: 'none' }}>
                      <li>{jobs[1].keyAccomplishments[0]}</li>
                    </ul>
                  </DisplayBox>
                </Grid>

                <Grid container textAlign={""}>
                  <Grid sm={12} md={2}></Grid>
                  <Grid sm={12} md={8}>
                    <DisplayBox elevation={12}>
                      <Grid
                        container
                        spacing={1}
                        textAlign={"center"}
                        style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}
                      >
                        <Grid xs={12} sm={6} md={3}>
                          <span style={{ fontWeight: "bold" }}>
                            Elementery School Teacher
                          </span>
                        </Grid>

                        <Grid xs={12} sm={6} md={3}>
                          <span style={{ fontWeight: "bold" }}>
                            Austin Discovery School
                          </span>
                        </Grid>

                        <Grid xs={12} sm={6} md={3}>
                          <span style={{ fontWeight: "bold" }}>Fulltime</span>
                        </Grid>

                        <Grid xs={12} sm={6} md={3}>
                          <span style={{ fontWeight: "bold" }}>
                            2020 - 2021
                          </span>
                        </Grid>

                        <Grid
                          xs={12}
                          style={{ fontSize: "2rem", marginBottom: "-1rem" }}
                        >
                          <FontAwesomeIcon
                            icon={icon({ name: "school", style: "solid" })}
                          />
                        </Grid>
                      </Grid>

                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          Responsibilities:{" "}
                        </span>
                        Utilized clear communication and critical thinking
                        skills to develop and implement lesson plans for all
                        subjects across two grade levels.
                      </p>
                      <span
                        style={{ fontWeight: "bold" }}
                      >
                        Key Accomplishment:
                      </span>
                      <ul style={{ marginTop: 0, listStyle: 'none' }}>
                        <li>
                          Used no-code platform{" "}
                          <a
                            style={{
                              fontWeight: "bold",
                              textDecoration: "underline",
                            }}
                            href="https://web.seesaw.me/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Seesaw
                          </a>
                          <span> </span>in conjunction with several other
                          learning applications to successfully develop and
                          implement an innovative online learning system for
                          virtual learning, allowing students to learn
                          effectively from home with minimal hands on support
                          from parents and guardians.
                        </li>
                      </ul>
                    </DisplayBox>
                  </Grid>

                  <Grid container textAlign={""}>
                    <Grid sm={12} md={2}></Grid>
                    <Grid sm={12} md={8}>
                      <DisplayBox elevation={12}>
                        <Grid
                          container
                          spacing={1}
                          textAlign={"center"}
                          style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}
                        >
                          <Grid xs={12} sm={6} md={3}>
                            <span style={{ fontWeight: "bold" }}>
                              Theater Artist
                            </span>
                          </Grid>

                          <Grid xs={12} sm={6} md={3}>
                            <span style={{ fontWeight: "bold" }}>
                              Various Different Locations and Companies
                            </span>
                          </Grid>

                          <Grid xs={12} sm={6} md={3}>
                            <span style={{ fontWeight: "bold" }}>Contract</span>
                          </Grid>
                          <Grid xs={12} sm={6} md={3}>
                            <span style={{ fontWeight: "bold" }}>
                              1998 - 2019
                            </span>
                          </Grid>

                          <Grid
                            xs={12}
                            style={{ fontSize: "2rem", marginBottom: "-1rem" }}
                          >
                            <FontAwesomeIcon
                              icon={icon({
                                name: "masks-theater",
                                style: "solid",
                              })}
                            />
                          </Grid>
                        </Grid>

                        <p>
                          <span style={{ fontWeight: "bold" }}>
                            Responsibilities:{" "}
                          </span>
                          {jobs[3].description}
                        </p>
                        <span
                          style={{ fontWeight: "bold" }}
                        >
                          Key Accomplishments:
                        </span>
                        <ul style={{ marginTop: 0, listStyle: 'none' }}>
                          <li>{jobs[3].keyAccomplishments[0]}</li>
                          <br />
                          <li>{jobs[3].keyAccomplishments[1]}</li>
                          <br />
                          <li>{jobs[3].keyAccomplishments[2]}</li>
                        </ul>
                      </DisplayBox>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DisplayBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
