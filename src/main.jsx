import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import { CatBreedProvider } from './context/catBreed';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <CatBreedProvider>
          <App />
      </CatBreedProvider>
    </Router>

  </React.StrictMode>,
)
