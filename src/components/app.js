import React from 'react'
import Header from './header'
import Footer from './footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import StatesInfo from './StatesInfo'
import StateId from './StateId'
const App = () => {
    return (
        <div>
        <Header />
        <Router>
        <Route path="/:stateid" component={StateId}></Route>
        <Route path="/" exact= {true} >
            <StatesInfo />
        </Route>
        </Router>
        <Footer />
        </div>
    )
}
export default App
