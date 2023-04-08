// import components
// import Header from '../../components/Header';
import ProgrammingIcons from "../../components/ProgrammingIcons";
import DisplayBox from "../../components/DisplayBox";
// import ContactInfo from "../../components/ContactInfo";
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
      `While on the Mayday Staff worked to streamline the post parade clean up process, resulting in a 30% reduction in clean up time.`,
    ],
  },
];

const Resume = () => {
  return (
    <>
      <Grid container textAlign={"center"} style={{ padding: ".25rem" }}>
        <Grid xs={12} style={{ marginTop: "-2rem" }}>
          <h2
            style={{ margin: "0", fontSize: "2rem" }}
            className="permanent-marker"
          >
            &lt; Resume /&gt;
          </h2>
          <a href={pdf} download="Kevin Long Web Developer Resume">
            <span className="permanent-marker">
              &lt; Click here to download a PDF of my resume. /&gt;
            </span>
          </a>
        </Grid>

        <DisplayBox>
          <Grid xs={12} style={{ marginTop: "-1rem" }}>
            <h3
              style={{ marginTop: "", marginBottom: "1rem", fontSize: "2rem" }}
            >
              Kevin Long
            </h3>
            <DisplayBox >
              {/* <Grid style={{marginTop: '.5rem', marginBottom: '1rem'}}>
                <ContactInfo />
              </Grid> */}
              <Grid container spacing={1}>

              <Grid xs={12} sm={6} md={4} >
                   <span style={{fontWeight: 'bold'}}>Austin, TX</span>
                 </Grid>
                 <br></br>
                 <Grid xs={12} sm={6} md={4}>
                   <a href="tel:512-975-0082">
                     <span>Phone: </span><span style={{fontWeight: 'bolder', textDecoration: 'underline'}}>512-975-0082</span>
                   </a>
                 </Grid>
                 <br></br>
                 <Grid xs={12} sm={6} md={4}>
                   <a href="mailto:kevinjlong75@gmail.com.com">
                     <span>Email: </span><span style={{fontWeight: 'bolder', textDecoration: 'underline'}}>kevinjlong75@gmail.com</span>
                   </a>
                 </Grid>
                 <br></br>
                 <Grid xs={12} sm={6} md={4}>
                   <a 
                     href='https://www.linkedin.com/in/klong75/' 
                     target='_blank' 
                     rel='noreferrer' 
                     aria-label="Link to Kevin's LinkedIn Profile"
                   >
                     <span>LinkedIn: <span style={{fontWeight: 'bolder', textDecoration: 'underline'}}>linkedin.com/in/klong75</span>
                     </span>
                   </a>
                 </Grid>
                 <br></br>
                 <Grid xs={12} sm={6} md={4}>
                   <a href="https://kevinlong.dev" target="_blank" rel="noreferrer" aria-label="Link to Kevin's Portfolio">
                     <span>Portfolio: <span style={{fontWeight: 'bolder', textDecoration: 'underline'}}>kevinlong.dev</span>
                     </span>
                   </a>
                 </Grid>
                 <br></br>
                 <Grid xs={12} sm={6} md={4}>
                   <a 
                     href='https://github.com/KLong75' 
                     target='_blank' 
                     rel='noreferrer' 
                     aria-label="Link to Kevin's GitHub Profile"
                   >
                    <span>GitHub: <span style={{fontWeight: 'bolder', textDecoration: 'underline'}}>github.com/KLong75</span></span>
                   </a>
                 </Grid>
              </Grid>
            </DisplayBox>
          </Grid>
          <Grid xs={12}>
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: "",
              }}
            >
              Summary
            </h4>
            <DisplayBox>
              <p style={{ textAlign: "left", padding: ".5rem" }}>
                Full Stack Software Engineer. Based in Austin, TX. Background in
                the performing arts and education. Brings the passion and
                creativity of an artist combined with the patient persistence
                and skilled communication of a teacher to work as a software
                engineer. Thrives on creative problem-solving and collaboration.
                Experienced at meeting deadlines under pressure. Loves the
                challenge of bringing "What if?" to life.
              </p>
            </DisplayBox>
          </Grid>

          <Grid xs={12}>
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Education
            </h4>
            <DisplayBox>
              {/* <Grid container >
                <Grid xs={12} md={4}>
                  <span style={{ fontWeight: "bold" }}>
                    Certificate in Full Stack Web Development
                  </span>
                </Grid>

                <Grid xs={12} md={4}>
                  <span style={{ fontWeight: "bold" }}>
                    University of Texas
                  </span>
                </Grid>

                <Grid xs={12} md={4}>
                  <span style={{ fontWeight: "bold" }}>Austin, Texas</span>
                </Grid>

                <Grid xs={12}>
                  <span>A 24-week intensive program focused on gaining technical
                programming skills in Full Stack Web Development</span>
                </Grid>
              </Grid> */}
              {/* <a
                href="https://professionaled.utexas.edu/coding-boot-camp-certificate-program"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to UT Austin Coding Boot Camp Certificate Program"
              >
                <span style={{ fontWeight: "bold" }}>
                  Certificate in Full Stack Web Development | University of
                  Texas | Austin, TX
                </span>
              </a>
              <br></br>
              <span>
                A 24-week intensive program focused on gaining technical
                programming skills in Full Stack Web Development
              </span>
              <br></br>
              <a
                href="https://www.truman.edu/majors-programs/majors-minors/theatre-major/"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to Truman State University Theater Arts Major"
              >
                <p style={{ fontWeight: "bold" }}>
                  Bachelor of Arts - Theater Arts | Truman State University |
                  Kirksville, MO
                </p>
              </a> */}
              <Education />
            </DisplayBox>
          </Grid>

          <Grid xs={12}>
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Technical Skills
            </h4>
            <DisplayBox>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                JavaScript ES6, HTML5, CSS, MongoDB, Mongoose, Express, React,
                Node, SQL, Sequelize, MySQL, Bootstrap, Material UI, GitHub, bcrypt, JSON web tokens, RESTful APIs, Heroku, Git, Command Line, Responsive Web Design, Agile Methodology, Object-Oriented
                Programming, Test Driven Development, Model-View-Controller
                (MVC), PWA, Service Workers, IndexedDB, React Hooks, React Context API, React Router, Handlebars, jQuery
              </p>
              <Grid container spacing={1}>
                <Grid xs={2}></Grid>
                <Grid xs={8}>
                  <ProgrammingIcons />
                </Grid>
                <Grid xs={2}></Grid>
              </Grid>
            </DisplayBox>
          </Grid>

          <Grid xs={12}>
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: 0,
              }}
            >
              Relevant Work Experience
            </h4>
            <Grid container textAlign={"left"}>
              <Grid xs={12}>
                <DisplayBox>
                  <span style={{ fontWeight: "bold" }}>
                    Software Engineer | Freelance | 2022 - Present
                  </span>
                  <p style={{ marginLeft: ".25rem" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Responsibilities:{" "}
                    </span>
                    Design, Develop, Update, and Maintain reaponsive web
                    applications based on client specifications.
                  </p>
                  <span style={{ marginLeft: ".25rem", fontWeight: "bold" }}>
                    Current Projects:
                  </span>
                  <ul style={{ marginTop: 0, marginLeft: "2rem" }}>
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
                    <span>
                      GitHub Repository:
                      <a
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
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
              <Grid xs={12}>
                <DisplayBox>
                  <span style={{ fontWeight: "bold" }}>
                    Bootcamp Teaching Assistant - Fullstack Web Development |
                    edX | Part Time - Remote | 2022 - Present
                  </span>
                  <p style={{ marginLeft: ".25rem" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Responsibilities:{" "}
                    </span>
                    Assist with instruction during class sessions, support
                    students with class activities, homework assignments,
                    projects, and technical issues.
                  </p>
                  <span style={{ marginLeft: ".25rem", fontWeight: "bold" }}>
                    Key Accomplishment:
                  </span>
                  <ul style={{ marginTop: 0, marginLeft: "2rem" }}>
                    <li>
                      Plan and facilitate bi-weekly homework help sessions based
                      on student need resulting in a 15% increase in student
                      homework submissions.
                    </li>
                  </ul>
                </DisplayBox>
              </Grid>
              <Grid xs={12}>
                <DisplayBox>
                  <span style={{ fontWeight: "bold" }}>
                    Elementery School Teacher | Austin Discovery School |
                    Fulltime | 2020 - 2021
                  </span>
                  <p style={{ marginLeft: ".25rem" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Responsibilities:{" "}
                    </span>
                    Utilized clear communication and critical thinking skills to
                    develop and implement lesson plans for all subjects across
                    two grade levels.
                  </p>
                  <span style={{ marginLeft: ".25rem", fontWeight: "bold" }}>
                    Key Accomplishment:
                  </span>
                  <ul style={{ marginTop: 0, marginLeft: "2rem" }}>
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
                      <span> </span>in conjunction with several other learning
                      applications to successfully develop and implement an
                      innovative online learning system for virtual learning,
                      allowing students to learn effectively from home with
                      minimal hands on support from parents and guardians.
                    </li>
                  </ul>
                </DisplayBox>
              </Grid>
              <Grid xs={12}>
                <DisplayBox>
                  <span style={{ fontWeight: "bold" }}>
                    Theater Artist | Various Different Locations | 1998 - 2019
                  </span>
                  <p style={{ marginLeft: ".25rem" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Responsibilities:{" "}
                    </span>
                    {jobs[3].description}
                  </p>
                  <span style={{ marginLeft: ".25rem", fontWeight: "bold" }}>
                    Key Accomplishments:
                  </span>
                  <ul style={{ marginTop: 0, marginLeft: "2rem" }}>
                    <li>{jobs[3].keyAccomplishments[0]}</li>
                    <li>{jobs[3].keyAccomplishments[1]}</li>
                    <li>{jobs[3].keyAccomplishments[2]}</li>
                  </ul>
                </DisplayBox>
              </Grid>
            </Grid>
          </Grid>
        </DisplayBox>
      </Grid>
    </>
  );
};

export default Resume;
