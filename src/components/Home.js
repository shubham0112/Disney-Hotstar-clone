import React,{useEffect} from 'react'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import NewToDisney from './NewToDisney'
import Originals from './Originals'
import Trending from './Trending'
import '../App.css'
import db from '../firebase'

function Home() {

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies=snapshot.docs.map((doc)=>{
                console.log(doc.data());
                return {id:doc.id, ...doc.data()}
            })
            console.log(tempMovies);
        })
    },[])

    return (
        <div className='home'>
            <div className='one'>
                <ImgSlider/>
                <Viewers/>
                <Movies/>
                <NewToDisney/>
                <Originals/>
                <Trending/>
            </div>
        </div>
    )
}

export default Home
