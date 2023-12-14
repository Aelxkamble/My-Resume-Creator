import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Layout from "../Components/Layout/Layout";
import SendIcon from '@mui/icons-material/Send';

const About = () => {
  return (
    <>
      <Layout>
        <div className="About" style={{backgroundImage:'https://www.shutterstock.com/image-photo/top-view-resumes-applicants-magnifying-260nw-2161194169.jpg',backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>
          <Box
            sx={{
              my: 20,
              textAlign: "center",
              height: 600,
              p: 2,
              color: "black",
              "& h4": {
                fontWeight: "bold",
                my: 4,
                fontSize: "4rem",
              },
              "& p": {
                textAlign: "justify",
                fontSize: "1.5rem",
              },
              "@media (max-width:600px)": {
                mt: 0,
                "& h4": {
                  fontSize: "1rem",
                },
              },
            }}
          >
            <Typography variant="h4">Welcome To My Resume Creator</Typography>
            <p>
              The Resume Builder Application is a user-friendly and versatile
              tool designed to help individuals create professional and
              well-structured resumes with ease. Whether you're a job seeker, a
              student, or a professional looking to update your CV, this
              application simplifies the resume creation process, allowing you
              to focus on showcasing your skills and experiences.
              <br />
              <ul>
                <li style={{listStyle:'none'}}><SendIcon />  <span style={{fontWeight:'bold'}}>Efficiency:</span> Say goodbye to the hassle of manually formatting and
              arranging your resume. Our application automates this process,
              saving you valuable time.</li>
              <li style={{listStyle:'none'}}> <SendIcon />  <span style={{fontWeight:'bold'}}>Professional Templates:</span> Access a range
              of professionally designed resume templates that are visually
              appealing and easy to customize.</li>
              <li style={{listStyle:'none'}}> <SendIcon />  <span style={{fontWeight:'bold'}}>User-Friendly Interface: </span>Our
              intuitive user interface guides you through the resume creation
              process step by step, ensuring that you don't miss any critical
              information.</li>
              <li style={{listStyle:'none'}}> <SendIcon />  <span style={{fontWeight:'bold'}}>Structured Sections: </span> Easily input your personal
              information, work experience, education, skills, and more,
              following industry-standard resume formats.</li>
              <li style={{listStyle:'none'}}> <SendIcon />  <span style={{fontWeight:'bold'}}>Customization: </span> Tailor
              your resume to match your unique experiences and qualifications.
              You have the flexibility to edit and rearrange sections as needed.</li>
              <li style={{listStyle:'none'}}> <SendIcon />  <span style={{fontWeight:'bold'}}>Resume Preview: </span> Instantly preview your resume as you make changes,
              ensuring it looks just the way you want it.</li>
              <li style={{listStyle:'none'}}> <SendIcon />  <span style={{fontWeight:'bold'}}>Export Options: </span>
              Generate your resume in multiple formats, including PDF, to share
              with potential employers or save for future reference.</li>
              <li style={{listStyle:'none'}}> <SendIcon />  <span style={{fontWeight:'bold'}}>Free and
              Open Source: </span> The Resume Builder Application is open source and
              free to use, making it accessible to everyone.!</li>
              </ul>
                  
                
            </p>
          </Box>
        </div>
      </Layout>
    </>
  );
};

export default About;
