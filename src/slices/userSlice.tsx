import {createSlice} from '@reduxjs/toolkit'

interface State {
    defaultAccount: null|string 
}

const initialState:State ={
    defaultAccount:null
} 
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAccount:(state,action)=>{
             state.defaultAccount = action.payload
        }
    }
})

export const {setAccount} = userSlice.actions
export default userSlice.reducer 