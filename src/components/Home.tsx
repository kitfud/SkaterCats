import React from 'react'
import Carousel from 'react-material-ui-carousel'
import img1 from '../img/504.png'
import img2 from '../img/546.png'
import img3 from '../img/611.png'
import img5 from '../img/729.png'
import img6 from '../img/739.png'
import img7 from '../img/793.png'
import img8 from '../img/871.png'
import img9 from '../img/904.png'
import img10 from '../img/978.png'

type Props = {}

const Example: Function = ()=>
   {
var items: string[] = [img1,img2,img3,img5,img6,img7,img8,img9,img10]
  
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
    </>
   
  )
}

export default Home