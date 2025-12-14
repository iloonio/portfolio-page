// src/App.jsx (Cleaned Version)

import './App.css'
// Note: Removed unused imports like useState, Button, Box, and MUI Link

// Import components from react-router-dom and use an alias for Link
import { Routes, Route, Link as RouterLink } from 'react-router-dom'; 

// Import your page components
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

// (Optional) Import MUI components for a better-looking navigation bar
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


/* hej hej  */
function App() {
  // Removed const [count, setCount] = useState(0)

  return (
    // Note: BrowserRouter has been moved to main.jsx
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          
          {/* Use Button and RouterLink alias for a consistent look */}
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Optional: Add a catch-all route */}
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </main>
    </>
  )
}

export default App;