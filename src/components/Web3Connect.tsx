import React,{useEffect,useState} from 'react'
import {Button,
    useTheme,
    useMediaQuery,
} from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks'
import {setAccount} from '../slices/userSlice'
import {ethers} from 'ethers'
import NFTminterContractJSON from  '../contracts/AutoMinter.json'
import {setProvider, setSigner, setContract} from '../slices/nftcontractSlice'

import {useSelector} from 'react-redux'
import { RootState } from '../store'

type Props = {}

declare global {
    interface Window {
        ethereum:any;
    }
}
const NFTminterABI = NFTminterContractJSON.abi
const NFTminterADDRESS = NFTminterContractJSON.address

const Web3Connect = (props: Props) => {

//variables declared for testing purposes
const contract = useSelector((state:RootState)=>state.nftcontract.contract)
const  provider= useSelector((state:RootState)=>state.nftcontract.provider)
const signer = useSelector((state:RootState)=>state.nftcontract.signer)

 const userName = useAppSelector((state)=> state.user.defaultAccount)
 const dispatch = useAppDispatch()

 const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down("md"))

 const [connButtonText, setConnButtonText] = useState('MetaMask Connect');
 const [accountchanging, setAccountChanging] = useState(false)
 const [errorMessage, setErrorMessage] = useState <string|null> (null);
 const [connectButtonColor, setConnectButtonColor] = useState<string>('purple')
 const [connected, setConnected] = useState(false)
 
 const connectWalletHandler = () => {

    if (window.ethereum && window.ethereum.isMetaMask) {
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then((result:any) => {
                accountChangedHandler(result[0]);
                setConnectButtonColor("#3f51b5")
            })
            .catch((error:any) => {
                console.log('error')
                setErrorMessage(error.message);
            });
    } else {
        alert('Need to install MetaMask');
        setErrorMessage('Please install MetaMask browser extension to interact');
    }
}


const accountChangedHandler = (newAccount:string) => {
    if (!accountchanging) {
        setAccountChanging(true)
        const newAccountResult = checkAccountType(newAccount)
        dispatch(setAccount(newAccountResult))
        updateEthers();
        setConnButtonText("CONNECTED: "+newAccountResult.substring(0, 6) + "..." + newAccountResult.substring(newAccountResult.length - 4, newAccountResult.length))
        setConnected(true)
    }
}

const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
}

const checkAccountType = (newAccount:any) => {
    if (Array.isArray(newAccount)) {
        return newAccount[0].toString()
    }
    else {
        return newAccount
    }
}

useEffect(() => {
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', accountChangedHandler);
        window.ethereum.on('chainChanged', chainChangedHandler);

        return () => {
            window.ethereum.removeListener('accountsChanged', accountChangedHandler);
            window.ethereum.removeListener('chainChanged', chainChangedHandler);
        }
    }
}, [])



   const updateEthers = async () => {
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        dispatch(setProvider(tempProvider))
        let tempSigner = tempProvider.getSigner();
        dispatch(setSigner(tempSigner))
        let tempContract = new ethers.Contract(NFTminterADDRESS,NFTminterABI,tempProvider)
        dispatch(setContract(tempContract))
    }

  return (
!isMobile?(
  <Button
    sx={{
        backgroundColor:connectButtonColor
    }}
    variant="contained" 
    onClick={()=>connectWalletHandler()}>
   {connButtonText} 
    </Button>
)
   :(
    <Button
    sx={{
        backgroundColor:connectButtonColor
    }}
    variant="contained" 
    >
   {"Web3 Connect Wallet Is Not Available on Mobile. Please Connect To Polygon Mainnet Using Desktop + Metamask"} 
    </Button>
   )
   
  )
}

export default Web3Connect