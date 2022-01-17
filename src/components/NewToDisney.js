import React from 'react'
import '../App.css'
import img1 from '../images_disney/garfield.jfif'
import img2 from '../images_disney/raya.jfif'
import img3 from '../images_disney/falcon.png'
import img4 from '../images_disney/my_music_story.png'

function NewToDisney() {
    return (
        <div className='movie_container'>
            <h4>New to Disney+</h4>
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

export default NewToDisney