import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import pfp from '/helvetica-divination-14.png'
import './App.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


function App() {
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
        <h1>Vite + React</h1>
        <p>omg i love this</p>
          </Box>

        
    </Box>

    

    
  </>
  )
}

export default App
