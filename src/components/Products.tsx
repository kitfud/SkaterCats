import { CircularProgress,Box } from '@mui/material'
import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import { RootState } from '../store'
import {Button,Grid,Typography} from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks'
import {setNFTOwned} from '../slices/userSlice'
import catJSON from '../CatData.json'
import loveCat from '../img/LoveProducts.png'
import trustCat from '../img/TrustCat.png'
import achieveCat from '../img/AchieveCat.png'

type Props = {}

const Products = (props: Props) => {

  const currentAccount = useSelector((state:RootState)=> state.user.defaultAccount)
  const nftContract = useSelector((state:RootState)=>state.nftcontract.contract)
  const provider = useSelector((state:RootState)=>state.nftcontract.provider)
  const nftsowned = useAppSelector(state=>state.user.nftowned)

  const dispatch = useAppDispatch()

  const [processing, setProcessing] = useState(false)
  const stashList = catJSON.Stash.items

  useEffect(()=>{
  hasSkaterCat()
  },[currentAccount])

async function hasSkaterCat (){
    if(nftContract){
    setProcessing(true)
    const amount = await nftContract.balanceOf(currentAccount)
    const amountNum = amount.toNumber()
    dispatch(setNFTOwned(amountNum))
    setTimeout(triggerProcessingOff,10)
  }
}

function triggerProcessingOff(){
  setProcessing(false)
}

useEffect(()=>{
console.log("nfts owned", nftsowned)
},[nftsowned])


const MintNFT = ()=>{
  return(
    <>
    <Typography>Mint An NFT To Access the Stash</Typography>
    <Box>
    <Button
    sx={{marginTop:2,marginBottom:2}} 
    color="success"
    variant="contained" 
    onClick={()=> window.open('https://www.autominter.com/mint/62eabae4e456163f1a39b95b')} >Go To Minting Page</Button>
    </Box>
   <img width="40%"src={trustCat} alt="" />
    </>
  
  )
}
  
return (
  !processing?(
    !currentAccount?(  
      <>
      <Typography color="purple"sx={{marginBottom:2}}variant="h3">Web3 Connect Wallet to Verify NFT Ownership</Typography>
      <Box>
      <img width="60%"src={achieveCat} alt="" />
      </Box>
      
      </>
 
         ):(
          nftsowned>0?(
            <>
            <Typography sx={{marginBottom:2}}>Welcome to the Stash</Typography>
            <Grid container direction="row" justifyContent='center' alignItems='center'>
            {
                stashList.slice().map((item)=>{
                  return(
                    <Grid sm={6} md={2} lg={1} item>

                    <iframe 
                    width='120px'
                    height='240px'
                    marginWidth={0}
                    marginHeight={0}
                    scrolling='0'
                    frameBorder={0}
                    sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" src={item}></iframe>
                    </Grid>
                   
                  )
                })
            }
           <Grid sx={{marginTop:2}} sm={12} md={8} item>
           <img width='50%'src={loveCat} alt="loveCat"/>
           </Grid>
            
            </Grid>
            
            </>
            
          ):
          ( 
            <MintNFT/>
          )
         )
  ):(
<CircularProgress/>
  )

  
   )
}

export default Products