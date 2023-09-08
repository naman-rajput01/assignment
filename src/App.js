import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Info from './component/Info';



function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers');
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchBeers();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);

  }
  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Punk Beer
            </Typography>
            <input
              type="text"
              placeholder="Search for beers"
              value={searchTerm}
              onChange={handleChange}
            />
          </Toolbar>
        </AppBar>
      </Box >
      <Box >
        <Info props={filteredBeers} />
      </Box>
    </>
  );
}

export default App;
