import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const url = 'https://music-backend-g6am.onrender.com';

  const [volume, setVolume] = useState(1);
  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0
    },
    totalTime: {
      second: 0,
      minute: 0 
    }
  });

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.error('Error playing audio:', err);
      });
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = async (id) => {
    try {
      const song = songsData.find((item) => item._id === id);
      if (song) {
        setTrack(song);
        // Wait for next render cycle before playing
        setTimeout(async () => {
          if (audioRef.current) {
            try {
              await audioRef.current.play();
              setPlayStatus(true);
            } catch (err) {
              console.error('Error playing audio:', err);
            }
          }
        }, 100);
      }
    } catch (error) {
      console.error('Error in playWithId:', error);
    }
  };

  const previous = async () => {
    try {
      const currentIndex = songsData.findIndex((item) => item._id === track._id);
      if (currentIndex > 0) {
        setTrack(songsData[currentIndex - 1]);
        setTimeout(async () => {
          if (audioRef.current) {
            try {
              await audioRef.current.play();
              setPlayStatus(true);
            } catch (err) {
              console.error('Error playing audio:', err);
            }
          }
        }, 100);
      }
    } catch (error) {
      console.error('Error in previous:', error);
    }
  };

  const next = async () => {
    try {
      const currentIndex = songsData.findIndex((item) => item._id === track._id);
      if (currentIndex !== -1 && currentIndex < songsData.length - 1) {
        setTrack(songsData[currentIndex + 1]);
        setTimeout(async () => {
          if (audioRef.current) {
            try {
              await audioRef.current.play();
              setPlayStatus(true);
            } catch (err) {
              console.error('Error playing audio:', err);
            }
          }
        }, 100);
      }
    } catch (error) {
      console.error('Error in next:', error);
    }
  };

  const seekSong = async (e) => {
    if (audioRef.current && seekBg.current && !isNaN(audioRef.current.duration)) {
      audioRef.current.currentTime = (
        (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration
      );
    }
  };

  const getSongsData = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      if (response.data && response.data.songs) {
        setSongsData(response.data.songs);
        if (response.data.songs.length > 0) {
          setTrack(response.data.songs[0]);
        }
      }
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  const getAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data && response.data.album) {
        setAlbumsData(response.data.album);
      }
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const formatTime = (timeInSeconds) => {
    const seconds = Math.floor(timeInSeconds % 60);
    return seconds < 10 ? `0${seconds}` : seconds;
  };

  // Set volume when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [track, volume]);

  // Update seek bar and time
  useEffect(() => {
    if (audioRef.current) {
      const updateTime = () => {
        if (seekBar.current && !isNaN(audioRef.current.duration)) {
          const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          seekBar.current.style.width = Math.floor(progress) + "%";
          
          setTime({
            currentTime: {
              second: formatTime(audioRef.current.currentTime),
              minute: Math.floor(audioRef.current.currentTime / 60)
            },
            totalTime: {
              second: formatTime(audioRef.current.duration % 60),
              minute: Math.floor(audioRef.current.duration / 60)
            }
          });
        }
      };

      audioRef.current.ontimeupdate = updateTime;

      return () => {
        if (audioRef.current) {
          audioRef.current.ontimeupdate = null;
        }
      };
    }
  }, [track]);

  useEffect(()=>{
    //As soon as the PlayerContextProvider mounts for the first time, go fetch all the songs and albums from the backend API, and store them in state. Don’t repeat this unless the component is re-mounted as last me we have given empty.
    // getSongsData();
    // getAlbumData();

    const loadData = async () => {
      await getSongsData();
      await getAlbumData();
      // Once all data is fetched, set loading to false
      setIsLoading(false);
    };
      loadData();
    },[]);



  const contexValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    songsData,
    albumsData,
    volume,
    handleVolumeChange,
    isLoading
  };

  return (
    <PlayerContext.Provider value={contexValue} >
      {props.children}
    </PlayerContext.Provider>
    /* yane ki whatever hum PlayerContextProvider ke andar wrap karege usse 
      props.children bolre hai */

  );

};

export default PlayerContextProvider;


/* 
This file creates a PlayerContext and a PlayerContextProvider` component that:

stores player state (current track, play/pause, time, lists of songs/albums),

exposes methods to play/pause, jump to next/previous track, play a track by id, and seek,

fetches songs and albums from a backend API using axios,

keeps a reference to an <audio> element and the DOM elements used for the seek bar (so it can update UI as audio plays),

provides everything via React context so child components can control and read the player.
*/