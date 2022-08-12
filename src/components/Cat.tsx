import React,{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import {Button,Box,Grid,Card,CardMedia,CardHeader,Typography, CardActions} from '@mui/material'
import catJSON from '../CatData.json'

const Cat:React.FC = () => {

const params = useParams()
const catName = params.name

interface catData{
  description:string |undefined
  gear: string[] | undefined
}

const [catData, setCatData] = useState<catData>({'description':undefined,'gear':undefined})
const catObj:{}=catJSON

useEffect(()=>{  
if (catName){
   setCatData(catJSON[catName as keyof typeof catObj])
}
},[])


  return (
    
    <>
    <Grid container direction="row" spacing={2}>
    <Grid item md={6} lg={6}>
    <Card >
      <CardMedia 
      component='img'
      height='20%'
      width='20%'
      image={require(`../img/${catName}.png`)}/>
    </Card>
    </Grid>
   
    <Grid item sm={12} md={6} lg={6} >
    <Card sx={{padding:2}}>
    <CardHeader title={"About " +catName}/>
    <Typography>
      {catData.description}
    </Typography>
    </Card>
    <CardHeader title={catName+"'s"+" Gear"}/>

    <Grid container direction="row">
   
      <Grid item sm={12} md={12}>
    <Box>
    {
    catData.gear?
      catData.gear.slice().map((item)=>{
        return (
      <iframe 
     key={item}
     width='120px'
     height='260px'
     marginWidth={0}
     marginHeight={0}
     scrolling='0'
     frameBorder={0}
     sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" src={item}></iframe>
        )
      }):null
    }
    </Box>
    </Grid>
      </Grid>
    <CardActions>
        <Grid container direction="column">
      <Grid item >
    <Link to='/team'>
    <Button variant='contained' color='success'>Back to TEAM</Button>
    </Link>
    </Grid>
        </Grid>
   
      </CardActions>  
    
    </Grid>
    </Grid>
 
  
   
  
    </>
  
  )
}

export default Cat