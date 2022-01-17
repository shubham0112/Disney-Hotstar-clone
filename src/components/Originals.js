import React from 'react'
import '../App.css'
import img1 from '../images_disney/souk.jfif'
import img2 from '../images_disney/assembled.png'
import img3 from '../images_disney/burrow.jpg'
import img4 from '../images_disney/legends.jfif'

function Originals() {
    return (
        <div className='movie_container'>
            <h4>Originals</h4>
            <div className="movie_content">
                <div className="movie_wrap">
                    <img src={img1} />
                </div>
                <div className="movie_wrap">
                    <img src={img2} />
                </div>
                <div className="movie_wrap">
                    <img src={img3} />
                </div>
                <div className="movie_wrap">
                    <img src={img4} />
                </div>
            </div>
        </div>
    )
}

export default Originals