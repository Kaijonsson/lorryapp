import React from 'react'
import forest from './media/forest.mp4';
    
function BackGroundVid() {


    return (


        
            <video className='backgroundVid' autoPlay loop muted style={{
                position: 'absolute',
                zIndex: -1,
                top: '50%',
                left: '50%',
                minHeight: '100%',
                minWidth: '100%',
                transform: 'translateX(-50%) translateY(-50%)',
                overflow: 'hidden',
            }}>
                <source src={forest} type='video/mp4' />
            </video>

// export default function VideoBackground() { 
//     const videoRef= useRef();
//     const setPlayBack = () => {
//       videoRef.current.playbackRate = 0.5;
//     };
//     return (
//       <>
//         <video
//           ref={videoRef}
//           onCanPlay={() => setPlayBack()}>
//           <source src={Video} type="video/mp4" />
//         </video>
//       </>
//     );

    )
}

export default BackGroundVid
