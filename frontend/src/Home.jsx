// src/pages/Home.jsx (Your original App content)

import { useState } from 'react';
import pfp from '/helvetica-divination-14.png';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography'; // Use Typography for text

function Home() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '10vh', 
        p: 4, // Added padding for spacing
      }}>

        <Link href="https://helveticablanc.com/" target="_blank">
          {/* Replace the fixed width/height with responsive size properties if needed */}
          <img src={pfp} className="pfp" alt="Profile Picture" width={150} height={150} style={{ borderRadius: '50%' }} />
        </Link>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ml: 4,
        }}>
          <Typography variant="h4" component="h1">Vite + React</Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>omg i love this</Typography>

          <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </Button>
        </Box>
    </Box>
  );
}

export default Home;