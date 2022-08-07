import {createSlice} from '@reduxjs/toolkit'


interface nftContract {
    contract: {balanceOf:Function,mintFee:Function,contractURI:Function,name:string,owner:string}|null
    provider:{}|null
    signer:{}|null
}

const initialState: nftContract = {
    contract:null,
    provider:null,
    signer:null
}

export const nftContractSlice = createSlice({
    name:'nftcontract',
    initialState,
    reducers:{
        setProvider:(state,action)=>{
            state.provider = action.payload
        },
        setSigner: (state,action)=>{
            state.signer = action.payload
        },
        setContract:(state,action)=>{
            state.contract = action.payload
        }
    }
 
})

export const {setProvider,setSigner,setContract} = nftContractSlice.actions
export default nftContractSlice.reducer 