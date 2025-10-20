import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'

const SongItem = ({name,image,desc,id}) => {

  const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] relative group'>
      <img className='rounded w-full aspect-square object-cover' src={image} alt="" />

      <div className='absolute bottom-24 right-5 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center
                      opacity-0 group-hover:opacity-100 group-hover:bottom-20 transition-all duration-300'>
          <img src={assets.play_icon} alt="Play" className="w-6 h-6" />
      </div>
      
      <p className='font-bold mt-2 mb-1 truncate'>{name}</p>
      <p className='text-slate-200 text-sm truncate'>{desc}</p>     
    </div>
  )
}

export default SongItem