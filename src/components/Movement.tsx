import React from 'react'
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
  ListItemIcon
  } from '@mui/material'
  import catImage from '../img/516.png'
import ForumIcon from '@mui/icons-material/Forum';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {Link} from 'react-router-dom'
type Props = {}

const Movement = (props: Props) => {
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component='img'
        height='100%'
        image={catImage}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Skater Cat Movement
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The skater cats began as a solid litter of cool little creatures named Felix, Ginger
          Sophie and Bobo. They love to get radical on all occasions. After their short job in coorperate; 
          specificially with the Seattle based newspaper Streenger- they realized their true calling wasn't getting coffee
          for the fat cat! No, for any Skater Cat their calling is shredding the streets. Not whiping down tables in the board room.
        </Typography>
        <Typography sx={{marginTop:2}}variant='body1' color="text.secondary">
          Being a skater cat means you don't give a rat's bum about if you skatebord with two legs, four legs or no legs for that matter! 
          Everyone deserves to skate, cats included, especially if they want to demonstrate the skill of slamming down a pizza slice while doing so. Then we say all the power to you, go forth, gem of a creature. Skater cats are about finding the bright side of the grind rail, the smoothest 
          nook in the mini ramp, the heaviest manual pad performance to get privilage over the litter box!  

        
        </Typography>
        <Typography sx={{marginTop:2}}variant='body1' color="text.secondary">
         Skater cats don't back down, they bless up! So that's why they decided to start an NFT colleciton along with some of their favorite motivational slogans so everyone can get 
          cat radical on the regular.
        </Typography>
        </CardContent>
        <CardActions>
        <Grid container display='flex' direction='column'>
          <Grid item>
            <a href='https://www.autominter.com/mint/62eabae4e456163f1a39b95b' target="_blank">
            <Button 
            size="large" 
            variant='contained' 
            color='warning' 
            >Head to NFT Minting Page</Button>
            </a>
         
          </Grid>
        </Grid>    
        </CardActions>
    </Card>

    
    </Box>
    
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Card   sx={{ maxWidth: 600, marginTop:2 }} variant='elevation'> 
    <CardHeader title="Why go Skater Cat?" />
    <List>
                  <ListItem>
                    <ListItemIcon>
                      <ForumIcon sx={{ color: "purple", fontSize: '200%' }} />
                    </ListItemIcon>
                    <ListItemText>
                      When you buy a Skater Cat NFT you buy in to cats on skateboards! And with Polygon you also buy in to flexing on a budget! 
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocalGroceryStoreIcon sx={{ color: "purple", fontSize: '200%' }} />
                    </ListItemIcon>
                    <ListItemText>
                    Owners of Skater Cat NFTS get access to the secret Stash; some of the Skater cats favorite products 
                     likely to make any cat swoon! 
                    </ListItemText>
                  </ListItem>
      </List>

    </Card>
    </Box>
    </>
   
  )
}

export default Movement