import { useContext } from "react"
import CatBreedContext from "../../context/catBreed"
import "./PopularBreedPage.css"

const PopularBreedPage = () => {

  const { popularBreed } = useContext(CatBreedContext);
  return (
    <section>
      <h2 className="popular--breed__title">Top 10 most searched breeds</h2>
      <div className="popular--breed__container">
        {
          popularBreed.slice(0, 10).map((data, index) => (
            <div key={data.id} className='breedDetails--container'>
              <img src={data.url} alt={data.name} className='breedDetail--image' />
              <div>
                <h3 className="breedDetails--Name">{`${index + 1}. ${data.name}`}</h3>
                <p className="breedDetails--Description">{data.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default PopularBreedPage