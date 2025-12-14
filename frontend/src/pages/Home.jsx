import { useState } from 'react'
import pfp from '/helvetica-divination-14.png'
import '../App.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


function Home() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '10vh', 
        }}>
      
        <Link href="https://helveticablanc.com/" target="_blank">
          <img src={pfp} className="pfp" alt="Profile Picture" width={350} height={350} />
        </Link>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ml: 4,
        }}>
        <Typography variant="h1" >
          Portfolio
        </Typography>

        <Typography variant="body1" sx={{
          ml: 4,
          width: '100%',
          textAlign: 'left',
        }}> omg i love this omg i love this omg i omg i l omg i l  love this omg i love this </Typography>

        
        </Box>

        <Divider/>
        
    </Box>

    

    
  </>
  )
}

export default Home
