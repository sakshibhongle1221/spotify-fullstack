import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSong from './pages/AddSong';
import AddAlbum from './pages/AddAlbum';
import ListAlbum from './pages/ListAlbum';
import ListSong from './pages/ListSong';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Navigate } from 'react-router-dom';

export const url = 'https://music-backend-g6am.onrender.com'

const App = () => {
  return (
    <div className='flex items-start min-h-screen'> 
    <ToastContainer/>
    <Sidebar/>

    <div className='flex-1 h-screen overflow-y-scroll bg-white'>
      <Navbar/>

      <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
        <Routes>

          <Route path='/add-song' element ={<AddSong/>}/>
          <Route path='/add-album' element ={<AddAlbum/>}/>
          <Route path='/list-song' element ={<ListSong/>}/>
          <Route path='/list-album' element ={<ListAlbum/>}/>
          <Route path="/" element={<Navigate to="/list-song" />} />

        </Routes>
      </div>

    </div>

    </div>
  )
}

export default App