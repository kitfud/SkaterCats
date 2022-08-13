import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
   
  } from '@mui/material'

type Props = {}

const Footer = (props: Props) => {
  return (
   
     <AppBar position='static'>
<Toolbar sx={{ justifyContent: 'center', bgcolor:'lightgreen' }} >
  <Typography color="purple">
    SkaterCats 2022
  </Typography>
</Toolbar>
</AppBar>
   

  )
}

export default Footer