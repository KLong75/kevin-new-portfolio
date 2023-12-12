import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import from MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import components
import Header from './components/Header';
import Footer from './components/Footer';
import TyeDyeBackground from './components/TyeDyeBackground';
import ScrollToTopButton from './components/ScrollToTopButton'
// import page components
import About from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import MyWork from './pages/MyWork/MyWork';
import Resume from './pages/Resume/Resume';


const theme = createTheme({
  typography: {
    fontFamily: [
      // 'Roboto Flex',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  palette: {
    background: {
      // default: '#757263',
      // default: '#fbdecc',
    },
    text: {
      primary: '#000000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ul: {
          // listStyleType: 'none',
          padding: 0,
        },
        a: {
          textDecoration: 'none',
          color: 'black',
        },
      },
    },
  },
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TyeDyeBackground />
      <Router>
          <Header />
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<About />} />
              <Route path="/my_work" element={<MyWork />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <ScrollToTopButton/>
          <Footer />
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
