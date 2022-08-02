import React from 'react'
import {Link} from 'react-router-dom' 
import { AppBar, Toolbar, CssBaseline, Typography, IconButton, Box,Button } from '@mui/material'
import SkateboardingIcon from '@mui/icons-material/Skateboarding';

type Props = {}

const Header = (props: Props) => {
  return ( 
   
<AppBar position='static'>
<Toolbar sx={{ bgcolor: "lightgreen" }}>
<IconButton component={Link}
            to="/">
<SkateboardingIcon/>
<Typography variant="h4" color="white">
             SkaterCats
</Typography>
</IconButton>

<Box
            sx={{
              width: "50%",
              mx: "auto",
              bgcolor: "none",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}>
            <Button component={Link}
              to="/"
            >
              <Typography sx={{ color: "white" }}>
                Home
              </Typography>
            </Button>
            <Button component={Link}
              to="/movement"
            >
              <Typography sx={{ color: "white" }}>
                Movement
              </Typography>
            </Button>
            <Button component={Link}
              to="/team"
            >
              <Typography sx={{ color: "white" }}>
                Team
              </Typography>
            </Button>
            <Button component={Link}
              to="/products"
            >
              <Typography sx={{ color: "white" }}>
                Products
              </Typography>
            </Button>
          </Box>

</Toolbar>
</AppBar>
  )
}

export default Header