import React from 'react'
import {useSelector} from 'react-redux'
import { RootState } from '../store'
import {useEffect} from 'react';
import { dividerClasses } from '@mui/material';

type Props = {}

const Team = (props: Props) => {

const skaterNames = useSelector((state:RootState) => state.skaters.names)
skaterNames.forEach(i=>console.log(i))

const TeamNames:any = ()=>{
    return(
        skaterNames.map((i)=>{
        return <div>{i}</div>}
        )
    )
}

return (
    <TeamNames />
  )  
}

export default Team