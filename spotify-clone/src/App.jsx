
import React, { useContext } from 'react'
import Sidebar from './components/sidebar'
import Player from './components/player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import { assets } from './assets/assets';


const App = () => {

  const {audioRef,track,songsData,next,isLoading} = useContext(PlayerContext)

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center gap-4">
        <img className="w-24 animate-spin" src={assets.spotify_logo} alt="Loading..." />
        <p className="text-white text-lg">Loading Music...</p>
      </div>
    );
  }

  return (
    <div className='h-screen bg-black'>
       {
        songsData.length !==0 
        ? <>
        <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>      
      <Player/>
      </>
      : null

       }
    
      <audio ref={audioRef} src = {track ? track.file : null} preload='auto'
      onEnded={()=> next()} 
      ></audio>
    </div>
  );
};

export default App
