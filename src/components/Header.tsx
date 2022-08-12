import React from 'react'
import {Link} from 'react-router-dom' 
import { AppBar, Toolbar, Typography, IconButton, Box,Button } from '@mui/material'
import Web3Connect from './Web3Connect'
import{ReactComponent as CatLogo} from "../img/SkaterCatLogo.svg"
import SvgIcon from '@mui/material/SvgIcon';

type Props = {}


const Header = (props: Props) => {
  return ( 
<AppBar position='static'>
<Toolbar sx={{ bgcolor: "lightgreen" }}>
<IconButton component={Link}
            to="/">
{/* <SkateboardingIcon sx={{color:'purple'}}/> */}
<SvgIcon>
  <CatLogo/>
</SvgIcon>

<Typography variant="h4" color="purple">
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
              <Typography sx={{color: "purple" }}>
                Home
              </Typography>
            </Button>
            <Button component={Link}
              to="/movement"
            >
              <Typography sx={{ color: "purple" }}>
                Movement
              </Typography>
            </Button>
            <Button component={Link}
              to="/team"
            >
              <Typography sx={{ color: "purple" }}>
                Team
              </Typography>
            </Button>
            <Button component={Link}
              to="/products"
            >
              <Typography sx={{ color: "purple" }}>
                Products
              </Typography>
            </Button>
          </Box>
          <Web3Connect/>
</Toolbar>

</AppBar>
  )
}

export default Header