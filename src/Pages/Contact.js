import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <>
     <Layout>
    
      <Paper
        elevation={12}
        style={{
          padding: "5% ",
          margin: "15%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ paddingBottom: "1rem" }}>For Online Inquiries</h2>
        <p>
          Excepteur, porttitor provident repudiandae nisi nisi. Lorem
          cupiditate.
        </p>
        <div>
          <div>
            <form action="https://formspree.io/f/xjvqjdkp" method="POST">
              <label>User Name:</label>
              <input
                name="username"
                type="text"
                placeholder="username"
                required
                autoComplete="off"
              />
              <label>Email ID:</label>
              <input
                name="email"
                type="email"
                placeholder="example email@gmail.com"
                required
                autoComplete="off"
              />
              <label>Contact No:</label>
              <input
                name="phone"
                type="phone"
                placeholder="example +91"
                required
                autoComplete="off"
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
              ></textarea>
              <button type="submit" value="Send">
                Send
              </button>
            </form>
          </div>
        </div>
      </Paper>

     
        <Box
          sx={{
            my: 5,
            ml: 10,
            "& h4": { fontWeight: "bold", mb: 2 },
          }}
        >
          <Typography variant="h4" style={{ fontFamily: "Berkshire Swash" }}>
            Contact My Resume Creator
          </Typography>
          <p>
          The Resume Builder Application is a user-friendly and versatile
              tool designed to help individuals create professional and
              well-structured resumes with ease. Whether you're a job seeker, a
              student, or a professional looking to update your CV, this
              application simplifies the resume creation process, allowing you
              to focus on showcasing your skills and experiences.
          </p>
        </Box>
        <Box
          sx={{
            m: 3,
            width: "600px",
            ml: 10,
            "@media (max-width:600px)": {
              width: "300px",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-lable="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      bgcolor: "black",
                      width: "100%",
                      color: "white",
                      fontFamily: "Berkshire Swash",
                    }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />{" "}
                    123456(tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                    helpdesk@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1 }} />
                    +91 234856521
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    
    </>
  )
}

export default Contact
