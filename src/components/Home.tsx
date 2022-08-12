import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'

type Props = {}

const Example: Function = ()=>
   {
var items: string[] = [
  'https://ipfs.io/ipfs/QmZL3QbCXrvt1pTsBFTTpzABdwN3RopGYYREpWkEaekcsF?filename=504.png',
  'https://ipfs.io/ipfs/QmbYG1zStJpvJjiTb2hLTBKJwShuitfAL2VWCTHZiK7LAq?filename=546.png',
  'https://ipfs.io/ipfs/QmeN8MwGCC7eE22KapUNdjkrPtMUwP32YGBgUvvciHmLNr?filename=611.png',
  'https://ipfs.io/ipfs/QmTYMxxo839AcoyprvwrYdPBAVyBN1FjZg81VrpxeSLrm7?filename=697.png',
  'https://ipfs.io/ipfs/QmT4zEUwiey31ZujBvxZkMTVtTsNRPb5ktUEwQbFBb2JnZ?filename=729.png',
  'https://ipfs.io/ipfs/QmUoFiXV52hxDPmrVcWaQ43RL56qdUmym2KDyQB7ZJmLyr?filename=739.png',
  'https://ipfs.io/ipfs/Qmd83rn2jnQV6kHDrZpnoM2efP5THC3jLKTorvivZydYbv?filename=793.png',
  'https://ipfs.io/ipfs/QmekbMywQe2QkxxQyo7byzjbkcQdaLCum1oveYYN97P7hD?filename=871.png',
  'https://ipfs.io/ipfs/QmWZUWwAH9sVJXkyw2vmvSe6QxTRVj6GekVLJC9DD6Noy5?filename=904.png',
  'https://ipfs.io/ipfs/QmYCbvjXiKaiNaNQa6MFCYqR5Q3Q81K1dLK49dgb85Jtij?filename=978.png'
]
  
  return( 
    
      <Carousel>
      {
      items.map((i)=>{
      return <img key={i} height='700' width='auto' src={i} alt="" />
        })
      }
    </Carousel>
   
   

  )
   
  }


const Home = (props: Props) => {
  return (
    <>
    <Example />
    <Link to='movement'>
    <Button sx={{marginTop:1}} variant="contained">Learn More</Button>
    </Link>
    </>
  )
}

export default Home