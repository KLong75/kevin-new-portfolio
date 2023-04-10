// import from React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import components
import WebDevLogo from "../WebDevLogo";

import TyeDyeDarkBackground from "../../components/TyeDyeDarkBackground";

// import from Material UI
import Grid from "@mui/material/Unstable_Grid2";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// import images/logos
import webDev from "../../assets/logos/permanentMarkerWebDevLogo2crop.png";

// import styles
import styles from "./Header.module.css";

const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <header
      style={{
        padding: "2rem",
        backgroundColor: "",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Grid container spacing={0} alignItems="center" textAlign="center">
        <Grid
          item
          xs={12}
          style={{ marginTop: "-.5rem", marginBottom: ".5rem" }}
        >
          <WebDevLogo />
        </Grid>

        <Grid xs={12}>
          <h1
            className={`permanent-marker ${styles.appHeadline}`}
            style={{ margin: 0, fontSize: "3rem" }}
          >
            &lt; Kevin Long /&gt;
          </h1>
          <h2
            className={`permanent-marker ${styles.appSubHeadline}`}
            style={{ margin: 0, fontSize: "3rem" }}
          >
            &lt; Full Stack Web Developer /&gt;
          </h2>
        </Grid>
      </Grid>

      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {isMobile ? (
          <IconButton onClick={handleMenuOpen} size="large">
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <Grid xs={12}>
              <nav style={{ margin: 0, padding: 0 }}>
                <ul
                  className="permanent-marker"
                  style={{
                    display: "flex",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {/* <li style={{ margin: '20px 20px', fontSize: '18px', fontWeight: 'bold' }}>
                  <Link to="/">&lt; Home /&gt;</Link>
              </li> */}
                  <li
                    style={{
                      margin: "20px 20px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    <Link to="/">&lt; About /&gt;</Link>
                  </li>

                  <li
                    style={{
                      margin: "20px 20px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    <Link to="/kevinlong.dev/my_work">&lt; Projects /&gt;</Link>
                  </li>
                  <li
                    style={{
                      margin: "20px 20px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    <Link to="/kevinlong.dev/resume">&lt; Resume /&gt;</Link>
                  </li>
                  <li
                    style={{
                      margin: "20px 20px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    <Link to="/kevinlong.dev/contact">&lt; Contact /&gt;</Link>
                  </li>
                </ul>
              </nav>
            </Grid>
          </>
        )}

        <Menu
          className="mobile-menu"
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: "fixed",
              width: "100%",
              height: "100%",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "",
              // opacity: ".8",
              backgroundColor: "hsla(120,100%,75%,0.3)",
            },
          }}
        >
          <Grid container spacing={0} alignItems="" textAlign="center">
            <TyeDyeDarkBackground />
            <Grid item xs={12} style={{ marginTop: "-2rem" }}>
              <img
                src={webDev}
                alt=" Logo"
                style={{
                  width: "30%",
                  height: "auto",
                  marginBottom: "2rem",
                }}
              />
              <h1 style={{ fontSize: ".95rem" }} className="permanent-marker">
                &lt; Kevin Long | Web Developer /&gt;
              </h1>
            </Grid>

            <Grid xs={12}>
              <MenuItem
                component={Link}
                to="/"
                onClick={handleMenuClose}
                style={{
                  padding: "18px",
                  fontSize: "22px",
                  justifyContent: "center",
                  fontWeight: "bolder",
                }}
              >
                <span className="permanent-marker">&lt; About Me /&gt;</span>
              </MenuItem>
            </Grid>

            <Grid xs={12}>
              <MenuItem
                component={Link}
                to="/kevinlong.dev/my_work"
                onClick={handleMenuClose}
                style={{
                  padding: "18px",
                  fontSize: "22px",

                  justifyContent: "center",
                  fontWeight: "bolder",
                }}
              >
                <span className="permanent-marker">&lt; Projects /&gt;</span>
              </MenuItem>
            </Grid>
            <Grid xs={12}>
              <MenuItem
                component={Link}
                to="/resume"
                onClick={handleMenuClose}
                style={{
                  padding: "18px",
                  fontSize: "22px",
                  justifyContent: "center",
                  fontWeight: "bolder",
                }}
              >
                <span className="permanent-marker">&lt; Resume /&gt;</span>
              </MenuItem>
            </Grid>

            <Grid xs={12}>
              <MenuItem
                component={Link}
                to="/kevinlong.dev/contact"
                onClick={handleMenuClose}
                style={{
                  padding: "18px",
                  fontSize: "22px",
                  justifyContent: "center",
                  fontWeight: "bolder",
                }}
              >
                <span className="permanent-marker">&lt; Contact /&gt;</span>
              </MenuItem>
            </Grid>
          </Grid>
        </Menu>
      </Grid>
    </header>
  );
};

export default Header;
