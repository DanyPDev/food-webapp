import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import './EasterEgg.css';

function EasterEgg() {

    //video needs to be muted first for autoplay, see https://www.npmjs.com/package/react-player
    const [mutedState,setMutedState] = useState(true);
    const handleStart = () => {setMutedState(false); }
    
  return (
    <div className='video'>
        <ReactPlayer playing  onStart={handleStart} muted={mutedState} loop controls url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' />
    </div>
  )
}

export default EasterEgg