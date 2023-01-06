import './App.css'
import Logo from './assets/CatwikiLogo.svg';
import Home from './page/Home/HomePage';
import PopularBreedPage from './page/PopularBreed/PopularBreedPage';

import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import BreedDescription from './page/BreedDescription/BreedDescription';

function App() {

  return (
  
    <main className='app--container'>
      <header>
        <Link to={'/'}><img src={Logo} alt='' className='logo--image'/></Link>
      </header>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/popular-breed' element={<PopularBreedPage />} />
        <Route path='/:id' element={<BreedDescription />} />
      </Routes>

      <Footer />
      
    </main>
    
  )
}

export default App
