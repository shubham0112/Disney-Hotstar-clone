import React from 'react'
import '../App.css'
import img1 from '../images/viewers-disney.png'
import img2 from '../images/viewers-pixar.png'
import img3 from '../images/viewers-marvel.png'
import img4 from '../images/viewers-starwars.png'
import img5 from '../images/viewers-national.png'

function Viewers() {
    return (
        <div className='view_container'>
            <div className='view_wrap'>
                <img src={img1} />
            </div>
            <div className='view_wrap'>
                <img src={img2} />
            </div>
            <div className='view_wrap'>
                <img src={img3} />
            </div>
            <div className='view_wrap'>
                <img src={img4} />
            </div>
            <div className='view_wrap'>
                <img src={img5} />
            </div>
        </div>
    )
}

export default Viewers