// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import components
import AboutCube from "../../components/AboutCube";
import TextFade from "../../components/TextFade";
import DisplayBox from "../../components/DisplayBox";
import ScheduleAppointment from "../../components/ScheduleAppointment";

// import images

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const phrases = [
  "A Full Stack Web Developer",
  "A Teacher",
  "A Puppeteer",
  "A Musician",
  "A Long Distance Runner",
  "A Marathon Finisher",
  "A Stilt Walker",
];

const AboutMe = () => {
  return (
    <section>
      <Grid
        container
        spacing={2}
        justifyContent=""
        textAlign="center"
        style={{ marginTop: "" }}
      >
        <Grid
          xs={12}
          style={{
            marginTop: "",
            marginBottom: "",
          }}
        >
          <h3
            className="permanent-marker"
            style={{
              fontSize: "2rem",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            &lt; About Me /&gt;
          </h3>
        </Grid>

        <Grid xs={12} style={{ marginTop: "", fontSize: "1.25rem" }}>
          <span className="permanent-marker">I am</span>
          <p
            className="permanent-marker"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            {" "}
            <TextFade fadeSpeed={3600} phrases={phrases} />
          </p>
        </Grid>
        <Grid xs={12}>
          <AboutCube />
        </Grid>

        <Grid sm={12} md={2} />

        <Grid
          sm={12}
          md={8}
          style={{
            marginBottom: "-1.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          <DisplayBox style={{padding: '1rem'}}>
            <FontAwesomeIcon
              icon={icon({ name: "user-gear", style: "solid" })}
              style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}
            />

            <p>
              Full Stack Web Developer. Based in Austin, Texas. Certificate in
              Full Stack Web Development from the University of Texas at Austin.
            </p>
            <p>
              With a background in the performing arts and education, I bring
              the passion and creativity of an artist alongside the patient
              persistence and skilled communication of a teacher to my work as an engineer.
            </p>
            <p>
              I thrive on creative problem-solving and collaboration. I love the
              challenge of attempting to answer the question, "What if...?"
            </p>
          </DisplayBox>
        </Grid>

        <Grid sm={12} md={2} />

        <Grid sm={12} md={2} />

        <Grid sm={12} md={8}>
          {/* <DisplayBox> */}
          {/* <h4 className="permanent-marker" style={{ fontSize: "1.25rem" }}>
            &lt; Currently /&gt;
          </h4> */}
          <DisplayBox style={{padding: '1rem'}}>
          <h4 className="permanent-marker" style={{ fontSize: "1.25rem", marginTop: '0rem' }}>
            &lt; Currently /&gt;
          </h4>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Pursuing Freelance Work
              </li>
              <span style={{ fontSize: "1.1rem" }}>
                If you are in need of a website or app for your creative
                project, small business, or organization, I would love to talk!{" "}
              </span>
              <li style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Seeking Fulltime Employment
              </li>
              <span>
                As a developer, I am looking for a company that values
                creativity, collaboration, and a passion for learning.
              </span>
              <li style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Teaching (Assistant) - edX - Full Stack Web Development Bootcamp
              </li>
              <span>
                I love helping students learn and grow, and I am excited to
                continue to do so in this role.
              </span>
              <li style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Seeking New Tech Connections
              </li>
              <span>
                I am always looking to meet new people in the tech community. If
                you are a developer, designer, or tech professional, I would
                love to connect!
              </span>
            </ul>
            <Grid>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                I'm always up for a chat. Let's talk!
              </span>
            </Grid>
          </DisplayBox>
        </Grid>

        <Grid xs={12}>
          <ScheduleAppointment />
        </Grid>

      </Grid>
    </section>
  );
};

export default AboutMe;
