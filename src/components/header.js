import React from 'react'
import ReactDom from 'react-dom'
import './header.css'
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const Header = () =>{
    return (<div><h1 className="header">Covid Data by State as of {new Date().toLocaleDateString('en-US', options)}</h1></div>)
}

export default Header