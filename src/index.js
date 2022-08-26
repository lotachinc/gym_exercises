import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
) 

//create a text that says bg is 30 years old, when you click a button it should change to freeman is 35 years old