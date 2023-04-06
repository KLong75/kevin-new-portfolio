// import components
// import Header from '../../components/Header';
import ProgrammingIcons from "../../components/ProgrammingIcons";
import DisplayBox from "../../components/DisplayBox";

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// import pdf
import pdf from '../../assets/resume/Kevin_Long_Resume.pdf'


const Resume = () => {
  return (
    <>
      <Grid container textAlign={"center"} style={{padding: '.25rem'}}>
        <Grid xs={12} style={{marginTop: '-2rem'}}>
          <h2 style={{margin: '0', fontSize: '3rem'}} className="permanent-marker">&lt; Resume /&gt;</h2>
          <a href={pdf} download='Kevin Long Web Developer Resume'>
          <span className="permanent-marker">&lt; Click here to download a PDF of my resume. /&gt;</span>
          </a>
        </Grid>
       
        <DisplayBox>
          <Grid xs={12} style={{marginTop: '-1rem'}}>
            
              <h3 style={{marginTop: '', marginBottom: '1rem', fontSize: '2rem'}}>Kevin Long</h3>
              
                <Grid container spacing={1}>
                 <Grid xs={12} sm={6} md={4} >
                   <span style={{fontWeight: 'bold'}}>Austin, TX</span>
                 </Grid>
                 <br></br>
                 <Grid xs={12} sm={6} md={4}>
                   <a href="tel:512-975-0082">
                     <span style={{fontWeight: 'bolder'}}>512-975-0082</span>
                   </a>
                 </Grid>
                 <br></br>
                 <Grid xs={12} sm={6} md={4}>
                   <a href="mailto:kevinjlong75@gmail.com.com">
                     <span style={{fontWeight: 'bolder'}}>kevinjlong75@gmail.com</span>
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
                     <span>LinkedIn: <span style={{fontWeight: 'bolder'}}>linkedin.com/in/klong75</span>
                     </span>
                   </a>
                 </Grid>
                 <br></br>
                 <Grid xs={12} sm={6} md={4}>
                   <a href="https://kevinlong.dev" target="_blank" rel="noreferrer" aria-label="Link to Kevin's Portfolio">
                     <span>Portfolio: <span style={{fontWeight: 'bolder'}}>kevinlong.dev</span>
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
                    <span>GitHub: <span style={{fontWeight: 'bolder'}}>github.com/KLong75</span></span>
                   </a>
                 </Grid>
                </Grid>
              
          </Grid>
          <Grid xs={12}>
            
              <h4 style={{fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '-1rem'}}>Summary</h4>
              <DisplayBox>
              <p 
                style={{textAlign: 'left', padding: '.5rem'}}>
                  Full Stack Web Developer. Skills in JavaScript, HTML, CSS, MongoDB, Express.js, React.js, Node.js, responsive web design, and more. Bachelor of arts in theater. Has worked as a theater artist specializing in puppetry for over 20 years. A career in the arts has often necessitated a day job. Extensive work experience in a variety of roles and industries including retail, food service, agriculture, manufacturing, and education. Real-world experience informs thinking as a developer resulting in applications that are effective, intuitive, and easy to use. Excellent communication skills. Adapts to evolving circumstances. Growth mindset. Proactively works to grow and improve. Thrives on creative problem-solving and collaboration. Experienced at meeting deadlines under pressure. 
              </p>
              </DisplayBox>
          </Grid>
  
          <Grid xs={12}>
            
              <h4 style={{fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem'}}>Education</h4>
              <DisplayBox>
              <span
                style={{fontWeight: 'bold'}}>
                Certificate in Full Stack Web Development | University of Texas | Austin, TX
              </span>
              <br></br>
              <span>
                A 24-week intensive program focused on gaining technical programming skills in Full Stack Web Development
              </span>
              <br></br>
              <p
                style={{fontWeight: 'bold'}}>
                Bachelor of Arts - Theater Arts | Truman State University | Kirksville, MO 
              </p>
              </DisplayBox>
            
          </Grid>

          <Grid xs={12}>
            
              <h4 style={{fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem'}}>Technical Skills</h4>
              <DisplayBox>
              <p 
                style={{textAlign: 'center'}}>
                  JavaScript ES6, HTML5, CSS, MongoDB, Mongoose, Express, React, Node, SQL, Sequelize, MySQL, Bootstrap, Material UI, GitHub, bcrypt, JSON web tokens, RESTful APIs, Heroku, Git, Command Line, Responsive Web Design, Agile Methodology, Object-Oriented Programming, Test Driven Development, Model-View-Controller (MVC), PWA, Service Workers, IndexedDB, React Hooks, React Context API, React Router, Handlebars, jQuery
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
           
            <h4 style={{fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 0}}>Relevant Work Experience</h4>
              <Grid container textAlign={'left'}>
                <Grid xs={12}>
                  <DisplayBox>
                    <span style ={{fontWeight: 'bold' }} >Software Engineer | Freelance | 2022 - Present</span>
                    <p style={{marginLeft: '.25rem'}} >
                      Design, Develop, Update, and Maintain reaponsive web applications based on client specifications.
                    </p>
                    <span style={{marginLeft: '.25rem'}}>Current Projects:</span>
                    <ul style={{marginTop: 0, marginLeft: '2rem'}}>
                      <li style ={{fontWeight: 'bold'}}>Sam Hahn Travel</li>
                        <span>Link: 
                          <a style={{fontWeight: 'bold'}} href='https://klong75.github.io/sam-hahn-travel/' target='_blank' rel='noreferrer'> klong75.github.io/sam-hahn-travel/
                          </a>
                        </span>
                        <br></br>
                        <span>Description:</span>
                      <li style ={{fontWeight: 'bold'}}>Vain Mainstream  </li>
                        <span>Link: 
                          <a style={{fontWeight: 'bold'}} href='https://vainmainstream.com/' target='_blank' rel='noreferrer'> vainmainstream.com
                          </a>
                        </span>
                        <br></br>
                        <span>Description:</span>
                     </ul>
                  </DisplayBox>
                </Grid>
                <Grid xs={12}>
                  <DisplayBox>
                    <span style={{fontWeight: 'bold'}}>Bootcamp Teaching Assistant - Fullstack Web Development | 2U / edX |   Part Time - Remote | 2022 - Present</span>
                    <p style={{marginLeft: '.25rem'}}>
                      Assist with instruction during class sessions, support students with class activities, homework assignments, projects, and technical issues.
                    </p>
                    <span style={{marginLeft: '.25rem'}}>Key Accomplishment:</span>
                    <ul style={{marginTop: 0, marginLeft: '2rem'}}>
                      <li>Assisted with the development of the curriculum for the course</li>
                    </ul>
                  </DisplayBox>
                </Grid>
                <Grid xs={12}>
                  <DisplayBox>
                    <span style={{fontWeight: 'bold'}}>Elementery School Teacher | Austin Discovery School | Fulltime | 2020 - 2021</span>
                    <p style={{marginLeft: '.25rem'}}>
                      Utilized clear communication and critical thinking skills to develop and implement 
                      lesson plans for all subjects across two grade levels. 
                    </p>
                    <span style={{marginLeft: '.25rem'}}>Key Accomplishment:</span>
                    <ul style={{marginTop: 0, marginLeft: '2rem'}}>
                      <li>Successfully developed and implemented an innovative online learning system for virtual learning, allowing students to learn effectively from home with minimal on hand support from parents and guardians.</li>
                    </ul>
                  </DisplayBox>
                </Grid>
                <Grid xs={12}>
                  <DisplayBox>
                    <span style={{fontWeight: 'bold'}}>Theater Artist | Various Different Locations | 1998 - 2019</span>
                    <p style={{marginLeft: '.25rem'}}>
                      Utilized clear communication and critical thinking skills to develop and implement 
                      lesson plans for all subjects across two grade levels. 
                    </p>
                    <span style={{marginLeft: '.25rem'}}>Key Accomplishment:</span>
                    <ul style={{marginTop: 0, marginLeft: '2rem'}}>
                      <li>Performed in 18 sta</li>
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