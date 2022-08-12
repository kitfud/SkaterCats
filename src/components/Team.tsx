import React from 'react'
import {useSelector} from 'react-redux'
import { RootState } from '../store'
import {useEffect} from 'react';
import { dividerClasses } from '@mui/material';
import {Link} from 'react-router-dom'
import {
    Card,
    Button,
    Typography,
    CardContent,
    CardActions,
    CardMedia,
    CardHeader,
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,

    } from '@mui/material'
import catImage from '../img/516.png'
import BoboFace from '../img/BoboFace.png'
import { purple } from '@mui/material/colors';



type Props = {}

const Team = (props: Props) => {

const skaterNames = useSelector((state:RootState) => state.skaters.names)

const TeamNames:any = ()=>{
    return(
        <Grid container direction='row'>
            {
        skaterNames.map((i)=>{
        return (
            <Grid item sm={12} md={6}>
            <Box key={i} sx={{display:'inline-block', justifyContent:'center', alignItems:'center' }} >
            <Card variant='elevation' sx={{padding:2}}>
            <CardMedia
                component='img'
                height='100%'
                image={require(`../img/${i}Face.png`)}
                />
            <CardHeader title={i} />
            <Link to={`/cat/${i}`}>
            <Button sx={{backgroundColor:'#3f51b5'}} variant='contained'>Learn more about {i}'s cool style</Button>
            </Link>   
            </Card>
            </Box> 
            </Grid>
        )})
}
</Grid> 
    )
}

return (
    <TeamNames />
  )  
}

export default Team