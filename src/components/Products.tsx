import { CircularProgress } from '@mui/material'
import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import { RootState } from '../store'
import {Button} from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks'
import {setNFTOwned} from '../slices/userSlice'

type Props = {}

const Products = (props: Props) => {

  const currentAccount = useSelector((state:RootState)=> state.user.defaultAccount)
  const nftContract = useSelector((state:RootState)=>state.nftcontract.contract)
  const provider = useSelector((state:RootState)=>state.nftcontract.provider)
  const nftsowned = useAppSelector(state=>state.user.nftowned)

  const dispatch = useAppDispatch()

  const [processing, setProcessing] = useState(false)

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
    <div>Mint An NFT and Reload To Access the Stash</div>
    <Button
    sx={{marginTop:2}} 
    color="success"
    variant="contained" 
    onClick={()=> window.open('https://www.autominter.com/mint/62eabae4e456163f1a39b95b')} >Go To Minting Page</Button>
    </>
  )
}

  
return (
  !processing?(
    !currentAccount?(  
      <div>Web3 Connect Wallet to Verify NFT Ownership</div>
         ):(
          nftsowned>0?(
            <div>Skater Cat NFT Owner! Welcome to the stash</div>
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