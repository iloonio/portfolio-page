// src/pages/About.jsx

import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us Page
      </Typography>
      <Typography variant="body1">
        This application was built using Vite and React, featuring routing powered by React Router DOM and styled with Material UI (MUI).
      </Typography>
      {/* Add more content here */}
    </Box>
  );
};

export default About;