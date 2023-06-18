import Logo from '../../assets/CatwikiLogo.svg';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { useContext } from 'react';
import CatBreedContext from '../../context/catBreed';

const HeroSection = () => {
  const { search, setSearch, popularBreed, sortedName, filterDisplay, singleBreedPage } = useContext(CatBreedContext);


  return (
    <>
      <div className="upperHero--section__container">
        <img src={Logo} 
          alt='Logo Image' 
          className='upperHero--image' 
        />
        <p className='upperHero--text'>Get to know more about your cat breed</p>
        <div className={search ? "upperHero--form-breedName__container" : "upperHero--form-breedName__container-mobile"}>
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className='upperHero--form__container'
          >
            <input 
              type='text' 
              placeholder='Search' 
              className={search ? "upperHero--input upperHero--input__mobile" : "upperHero--input"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            <span className="material-symbols-outlined upperHero--icon">search</span>
          </form>
          <div className='upperHero--BreedName__container'>
            {
              filterDisplay && sortedName.map(data => (
                <button key={data.id}  onClick={() => singleBreedPage(data.id)} className='upperHero--breedName'>{data.name}</button>
              )).sort()
            }
          </div>
        </div>
        
      </div>
      <div className="lowerHero--section__container">
        <p className='lowerHero--text'>Most Searched Breeds</p>
        <div className='lowerHero--topBreed__container'>
          <h2 className='topBreed--title'>66+ Breeds For you <br/>to discover</h2>

          <Link to='/popular-breed'>
            <p className='showMore--text'>
              see more 
              <span className="material-symbols-outlined showMore--icon">trending_flat</span>
            </p>
          </Link>

        </div>

        <div className='lowerHero--topBreed__container extra'>
          {
            popularBreed.slice(0, 4).map(data => (
              <div key={data.id} className='topBreed--imageName__container'>
                <div className='topBreed--ImageHover--container'>
                  <img src={data.url} alt={`${data.name} cat breed photo`} className='topBreed--image' />
                  <div className='topBreed--sandle__container'></div>
                </div>
                <Link to={`/${data.id}`} className='topBreed--Name'>{data.name}</Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default HeroSection