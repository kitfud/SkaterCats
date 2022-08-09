import React from 'react'
import {useParams,Link} from 'react-router-dom'
import {Button,Box} from '@mui/material'

const Cat:React.FC = () => {
const params = useParams()
const catName = params.name

  return (
    <>
    <div>Cat: {catName}</div>
    <img src={require(`../img/${catName}.png`)} alt="" />
    <Box>
    <Link to='/team'>
    <Button variant='contained' color='success'>Back to TEAM</Button>
    </Link>
    </Box>
  
    </>
  
  )
}

export default Cat