import {createSlice} from '@reduxjs/toolkit'

export interface NamesList{
    names: string[]
}

const initialState: NamesList = {
    names: ['Felix','Ginger','Sophie','Bobo']
}

export const skaterSlice = createSlice({
    name:'skaters',
    initialState,
    reducers:{}
})

export default skaterSlice.reducer 
