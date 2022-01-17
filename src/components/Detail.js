import React from 'react'
import play from '../images/play-icon-black.png'
import trailer from '../images/play-icon-white.png'
import group from '../images/group-icon.png'



function Detail() {
    return (
        <div className='detail_container'>
            <div className="detail-background">
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="image" />
            </div>
            <div className="ImageTitle">
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="image" />
            </div>
            <div className="Controls">
                <button className="PlayButton">
                    <img src={play} alt="image" />
                    <span>PLAY</span>
                </button>

                <button className="PlayButton">
                    <img src={trailer} alt="image" />
                    <span>TRAILER</span>
                </button>

                <button className="AddButton">
                    <span>+</span>
                </button>

                <button className="AddButton">
                    <img src={group} alt="" />
                </button>
            </div>
            <div className="Subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, minima.
            </div>
            <div className="Description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, facilis, ullam reprehenderit cum doloribus dolor ut illum accusamus iusto obcaecati totam voluptatum praesentium dolorum itaque.
            </div>
        </div>
    )
}

export default Detail
