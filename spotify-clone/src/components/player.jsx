import React from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import { useContext } from 'react'

const Player = () => {

  const {track,seekBar,seekBg, playStatus,play,pause,time,previous,next,seekSong,volume,handleVolumeChange} = useContext(PlayerContext)

  return track ? (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>

      <div className='hidden lg:flex items-center gap-4'>
          <img className='w-12 aspect-square object-cover' src={track.image} alt="" />
          <div>
             <p>{track.name}</p>
             <p>{track.desc.slice(0,12) }</p>
          </div>
      </div>

      <div className='flex flex-col items-center gap-1 m-auto'>
          <div className='flex gap-4'>

            <div className="relative group">
              <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
              <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Shuffle
              </span>
            </div>

            
            <div className="relative group">
              <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />
              <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Previous
              </span>
            </div>

            <div className="relative group">
                {playStatus 
                ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause" /> 
                : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />}
               <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                {playStatus ? 'Pause' : 'Play'}
               </span>
            </div>


            <div className="relative group">
              <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
              <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Next
              </span>
            </div>

            <div className="relative group">
              <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
              <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Loop
              </span>
            </div>
             
        </div>

          <div className='flex items-center gap-5'>
            <p>{ time.currentTime.minute } : { time.currentTime.second } </p>
            <div ref = {seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-[#535353] rounded-full cursor-pointer'>
              <hr ref = {seekBar} className='h-1 border-none w-0 bg-[#1DB954] rounded-full'/>
            </div>
            <p>{time.totalTime.minute} : {time.totalTime.second }</p>
          </div>

      </div>

      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <div className="relative group">
            <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="Play" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Play
            </span>
        </div>
        <div className="relative group">
            <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="Lyrics" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Lyrics
            </span>
        </div>

        <div className="relative group">
            <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="Queue" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Queue
            </span>
        </div>

        <div className="relative group">
            <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="Connect to a device" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Connect to a device
            </span>
        </div>

        <div className ="relative group flex items-center gap-2">
            <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="volume" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Volume
            </span>
        
          <input 
             type="range" 
             min="0" 
             max="1" 
             step="0.01" 
             value={volume}
             onChange={handleVolumeChange}
             className="w-24 h-1 bg-gray-500 rounded-lg appearance-none cursor-pointer accent-green-500 "
          />
        </div>

        <div className="relative group">
            <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="Mini_Player" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Mini_Player
            </span>
        </div>
        
        <div className="relative group">
            <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="Zoom" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md invisible group-hover:visible whitespace-nowrap">
                Zoom
            </span>
        </div>

      </div>

    </div>

  ) : null
}

export default Player

