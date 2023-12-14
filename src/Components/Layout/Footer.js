import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#239ce2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          "& svg": {
            fontSize: "30px",
            cursor: "pointer",
          },
        }}
      >
        <Grid item>
          <InstagramIcon />
        </Grid>
        <Grid item>
          <YouTubeIcon />
        </Grid>
        <Grid item>
          <TwitterIcon />
        </Grid>
        <Grid item>
          <FacebookIcon />
        </Grid>
        <Grid item>
          <GitHubIcon />
        </Grid>
      </Grid>
      <Typography sx={{ marginTop: '1rem' }}>
        All Rights Reserved &copy; My Resume Creator
      </Typography>
    </Box>
  );
};

export default Footer;
