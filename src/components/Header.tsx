import React from 'react'
import {Link} from 'react-router-dom' 
import { AppBar,
   Toolbar, 
   Typography, 
   IconButton, 
   Box,
   Button,
  Grid,
   useTheme,
   useMediaQuery
   } from '@mui/material'
import Web3Connect from './Web3Connect'
import{ReactComponent as CatLogo} from "../img/SkaterCatLogo.svg"
import SvgIcon from '@mui/material/SvgIcon';
import DrawerComponent from "./Drawer"


type Props = {}


const Header = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))


  return ( 
<AppBar sx={{bgcolor:'lightgreen'}} position='static'>

  {isMobile?(<>

<IconButton component={Link}
            to="/">
<SvgIcon>
  <CatLogo/>
</SvgIcon>

<Typography variant="h4" color="purple">
             SkaterCats
</Typography>
  </IconButton>

<Grid item sm={5}>
<DrawerComponent/>
</Grid>

  
  <Web3Connect/>
  </>

  ):(
    <Toolbar sx={{ bgcolor: "lightgreen" }}>
<IconButton component={Link}
            to="/">
<SvgIcon>
  <CatLogo/>
</SvgIcon>

<Typography variant="h4" color="purple">
             SkaterCats
</Typography>
</IconButton>

<Box
            sx={{
              width: {sm:'20%',md:'90%'},
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
</Toolbar>)
}
</AppBar>
  )
}

export default Header