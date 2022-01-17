import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Detail from './components/Detail'
import {BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

function App() {
	return (
        // <Router>
        //     <Header/>
        //     <Switch>
        //         <Route exact path='/'>
        //             <Home/>
        //         </Route>
        //         <Route path='/login'>
        //             <Login/>
        //         </Route>
        //         <Route path='/detail'>
        //             <Detail/>
        //         </Route>
        //     </Switch>
        // </Router>
        <>
            <Header/>
            <Home/>
        </>
	)
}

export default App
