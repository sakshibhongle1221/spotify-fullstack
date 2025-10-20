import React,{useState,useContext,useEffect} from 'react';
import{PlayerContext} from '../context/PlayerContext';
import SongItem from './SongItem';
import AlbumItem from './AlbumItem';
import { assets} from '../assets/assets';
import Navbar from './Navbar';

const DisplaySearch = ()=>{
  const {songsData, albumsData} = useContext(PlayerContext);
  //query is a controlled input state for what the user typed into the search box
  const [query,setQuery] = useState('');
  //Local state arrays that hold the results after applying the search filter.
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [filteredAlbums,setFilteredAlbums]= useState([]);

  useEffect(()=>{
    //If the user query is empty (or only whitespace) thereâ€¢  nothing to search for. So we clear results and return early.
    if(query.trim()===''){
      setFilteredAlbums([]);
      setFilteredSongs([]);
      return;
    }

  const lowercasedQuery = query.toLowerCase();

   // const newFilteredSongs = songsData.filter(
   //   (song)=>
   //   song.name.toLowerCase().includes(lowercasedQuery) ||
   //   song.desc.toLowerCase().includes(lowercasedQuery)
   // );

   const newFilteredSongs = songsData.filter(song => {
    const name = (song.name || '').toLowerCase();
    const desc = (song.desc || '').toLowerCase();
    return name.includes(lowercasedQuery) || desc.includes(lowercasedQuery);
  });


  const newFilteredAlbums = albumsData.filter(album => {
    const name = (album.name || '').toLowerCase();
    const desc = (album.desc || '').toLowerCase();
    return name.includes(lowercasedQuery) || desc.includes(lowercasedQuery);
  });

    setFilteredSongs(newFilteredSongs);
    setFilteredAlbums(newFilteredAlbums);
  }, [query,songsData,albumsData]);

  return(
    <>
     <Navbar />
     <div className='mt-4 relative w-full max-w-[600px] mx-auto'>
      <input
      type="text"
      value ={query}
      onChange = {(e) => setQuery(e.target.value)}
      placeholder=" What do you want to listen to? "
      className="w-full bg-[#242424] text-white placeholder-gray-400 rounded-full px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-green-500 "
      />
      <img title="Search" src={assets.search_icon} alt="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" />    
     </div>

     <div className="mt-10">
        {/* Render results only if there is a search query */}
        {query && (filteredSongs.length > 0 || filteredAlbums.length > 0) ? (
          <>
            {filteredAlbums.length > 0 && (
              <div className='mb-8'>
                <h2 className='my-5 font-bold text-2xl'>Matching Albums</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                  {filteredAlbums.map((item) => (
                    <AlbumItem key={item._id} name={item.name} desc={item.desc} id={item._id} image={item.image} />
                  ))}
                </div>
              </div>
            )}

            {filteredSongs.length > 0 && (
              <div className='mb-4'>
                <h2 className='my-5 font-bold text-2xl'>Matching Songs</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                  {filteredSongs.map((item) => (
                    <SongItem key={item._id} name={item.name} desc={item.desc} id={item._id} image={item.image} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : query ? (
            // Show a "no results" message if the user has typed something
            <p className='text-center text-gray-400 mt-10'>No results found for "{query}"</p>
        ) : (
            // A default message when the search bar is empty
            <p className='text-center text-gray-400 mt-10'>Search for your favorite songs and albums.</p>
        )}
      </div>

    </>
  );
  
};

export default DisplaySearch;