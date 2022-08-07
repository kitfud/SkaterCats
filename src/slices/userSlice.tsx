import {createSlice} from '@reduxjs/toolkit'

interface State {
    defaultAccount: null|string 
    nftowned:number
}

const initialState:State ={
    defaultAccount:null,
    nftowned:0
} 
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAccount:(state,action)=>{
             state.defaultAccount = action.payload
        },
        setNFTOwned:(state,action)=>{
            state.nftowned = action.payload
        }
    }
})

export const {setAccount,setNFTOwned} = userSlice.actions
export default userSlice.reducer 