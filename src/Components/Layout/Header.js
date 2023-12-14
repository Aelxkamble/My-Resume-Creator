import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { NavLink, useNavigate } from "react-router-dom";







const Header = () => {


  const navigate=useNavigate()
  function goBack()
  {
    navigate('/')
  }
  function loginForm()
  {
    navigate('/login')
  }
  function signupForm()
  {
    navigate('/signup')
  }

  const [mobileOpen, setMobileOpen] = useState(false);
  //Handle Menu Click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //Menu Drwer
  const drwer = (
    <Box  onCLick={handleDrawerToggle} sx={{ textAlign: "center",flexGrow: 1 }}>
      <AppBar
        sx={{
          border: "1px solid black",
          borderRadius: "10px",
          bgcolor: "#239ce2",
        }}
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src="https://www.mycvcreator.com/assets/img/logo.png"
              style={{ width: "10rem",cursor:'pointer' }}
              onClick={()=>goBack()}
            />
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: "0.1" }}>
            <NavLink
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "black",
                cursor: "pointer",
              }}
              to={"/"}
            >
              {" "}
              Home{" "}
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: "0.1" }}>
            <NavLink
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "black",
                cursor: "pointer",
              }}
              to={"/about"}
            >
              {" "}
              About{" "}
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: "0.1" }}>
            <NavLink
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "black",
                cursor: "pointer",
              }}
              to={"/contact"}
            >
              {" "}
              Contact
            </NavLink>
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            border: "1px solid black",
            borderRadius: "10px",
            bgcolor: "#239ce2",
          }}
          position="static"
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                src="https://www.mycvcreator.com/assets/img/logo.png"
                style={{ width: "10rem",cursor:'pointer' }}
                onClick={()=>goBack()}
              />
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: "0.1" }}>
              <NavLink
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "black",
                  cursor: "pointer",
                }}
                to={"/"}
              >
                {" "}
                Home{" "}
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: "0.1" }}>
              <NavLink
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "black",
                  cursor: "pointer",
                }}
                to={"/about"}
              >
                {" "}
                About{" "}
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: "0.1" }}>
              <NavLink
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "black",
                  cursor: "pointer",
                }}
                to={"/contact"}z
              >
                {" "}
                Contact
              </NavLink>
            </Typography>
            <Button color="inherit" style={{color:'black'}}  onClick={()=>loginForm()}>Login</Button>
            <Button color="inherit" style={{color:'black'}} onClick={()=>signupForm()}>Signup</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <h1>Header</h1> */}
    </>
  );
};

export default Header;
