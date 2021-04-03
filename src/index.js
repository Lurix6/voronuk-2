import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  BrowserRouter as Router,
} from "react-router-dom"
import './resetStyles.css'
import App from './container/app/App'
import hystory from './helpers/history'

ReactDOM.render(
  <React.StrictMode>
    <Router hystory={hystory}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
