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
    <Grid container direction='column'>
    <Grid item xs={12} sm={12}>
    <img height='100%' width='auto' src={trustCat} alt="" />
    </Grid>
    </Grid>
    
   
    </>
  
  )
}
  
return (
  !processing?(
    !currentAccount?(  
      <>
      <Typography color="purple"sx={{marginBottom:2}}variant="h3">Web3 Connect Wallet to Verify NFT Ownership</Typography>
      <Box>
      <img className='Cat' src={achieveCat} alt="" />
      </Box>
      
      </>
 
         ):(
          nftsowned>0?(
            <>
            <Typography variant='h3' color='purple' sx={{marginBottom:2}}>Welcome to the Stash</Typography>
            <Grid container direction="row" justifyContent='center' alignItems='center'>
            {
                stashList.slice().map((item)=>{
                  return(
                    <Grid key={item} sm={12} md={3} lg={1} item>

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
         
          
            
            </Grid>
        
        <Box sx={{marginTop:2}}>
        <img width='auto'src={loveCat} alt="loveCat"/>
        </Box>
            
            </>
            
          ):
          ( 
            <MintNFT/>
          )
         )
  ):(
    <>
<Typography sx={{marginBottom:2}}>Make sure your wallet is connected to <a href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/" target="_blank">Polygon mainnet!</a></Typography>
<CircularProgress/>
    </>
  )

  
   )
}

export default Products