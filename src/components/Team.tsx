import React from 'react'
import {useSelector} from 'react-redux'
import { RootState } from '../store'
import {Link} from 'react-router-dom'
import {
    Card,
    Button,
    CardMedia,
    CardHeader,
    Box,
    Grid,
    } from '@mui/material'


type Props = {}

const Team = (props: Props) => {

const skaterNames = useSelector((state:RootState) => state.skaters.names)

const TeamNames:any = ()=>{
    return(
        <Grid container direction='row'>
            {
        skaterNames.map((i)=>{
        return (
            <Grid key={i} item sm={12} md={6}>
            <Box  sx={{display:'inline-block', justifyContent:'center', alignItems:'center' }} >
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