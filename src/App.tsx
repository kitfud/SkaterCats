
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Movement from './components/Movement';
import Team from './components/Team';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import { Paper,Grid,Box } from '@mui/material';
import React from 'react'

function App() {
  return (
    <div className='App'>
    <Header/>
   <Grid sx={{padding:2}} container direction='column'alignItems='center'>
   <Paper sx={{height:'80vh',width:'100%'}}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='home' element={<Home/>} />
      <Route path='movement' element={<Movement/>} />
      <Route path='team' element={<Team/>} />
      <Route path='products' element={<Products/>} />
    </Routes>
    </Paper>
   </Grid>
    <Footer/>
    </div>   
  );
}

export default App;
