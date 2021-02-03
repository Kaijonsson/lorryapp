import React from 'react'
import snow from './media/snow.mp4';
    
// Detta är precis som funktionen säger, bakgrundsvideon som fyller hela bakgrunden på appen.
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
            }}>
                <source src={snow} type='video/mp4' />
            </video>

    )
}

export default BackGroundVid
