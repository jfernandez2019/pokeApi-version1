import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Pokedex } from './Components/Pokedex'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pokedex/>
  </React.StrictMode>,
)
