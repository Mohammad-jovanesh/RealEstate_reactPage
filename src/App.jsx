import React from 'react';
import "./App.css"
import {Header} from "./Component/Header/Header.jsx"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {Home} from './Component/Home/Home.jsx';
import {Works} from './Component/Works/Works'

export const App =()=>{
    return(
        <Router>
           <div className="app">
               <div className="Glass">
                   <Header />
                   <Switch>
                       <Route path="/" component={Home} exact />
                       <Route path="/works" component={Works} exact />
                       
                       </Switch>
               </div>
            </div>
        </Router>
        
    )
}