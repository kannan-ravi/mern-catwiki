import { useContext } from "react"
import CatBreedContext from "../../context/catBreed"
import './BreedDescription.css'
import api from '../../api/CatData';

import { useParams } from "react-router-dom"
import { useEffect } from "react"

const BreedDescription = () => {
  const { breedData, imageData, setImageData, isLoading, setIsLoading } = useContext(CatBreedContext)
  const { id } = useParams();
  const singleBreedData = breedData.find(data => data.id === id);

  useEffect(() => {
    const imageData = async () => {
      setIsLoading(true)
      const response = await api.get(`/image/${id}`);
      setImageData(response.data)
      setIsLoading(false)
    }
    imageData();
  }, [id])

  return (
    <section className="singleBreed--wrapper">
      <div>
        {
          isLoading ? <span className="loader"></span> 
          : 
          <div>
            <div className="singleBreed--first__container">
            <img src={singleBreedData?.url} alt={singleBreedData?.name} className='singleBreed--image' />
            <div>
              <h2 className="singleBreed--name">{singleBreedData?.name}</h2>
              <p className="singleBreed--description">{singleBreedData?.description}</p>
              <p className="singleBreed--temperament"><span>Temperament:</span> {singleBreedData?.temperament}</p>
              <p className="singleBreed--origin"><span>Origin:</span> {singleBreedData?.origin}</p>
              <p className="singleBreed--lifespan"><span>Life Span:</span> {singleBreedData?.life_span} years</p>
              <div className="singleBreed--rating__container">
                <p className="rating--text">Adaptability:</p> 
                <div className={singleBreedData?.adaptability > 0 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.adaptability > 1 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.adaptability > 2 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.adaptability > 3 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.adaptability == 5 ? "brown--bar" : "white--bar"}></div>
              </div>
              <div className="singleBreed--rating__container">
                <p className="rating--text">Affection level:</p> 
                <div className={singleBreedData?.affection_level > 0 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.affection_level > 1 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.affection_level > 2 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.affection_level > 3 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.affection_level == 5 ? "brown--bar" : "white--bar"}></div>
              </div>
              <div className="singleBreed--rating__container">
                <p className="rating--text">Child Friendly:</p> 
                <div className={singleBreedData?.child_friendly > 0 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.child_friendly > 1 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.child_friendly > 2 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.child_friendly > 3 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.child_friendly == 5 ? "brown--bar" : "white--bar"}></div>
              </div>
              <div className="singleBreed--rating__container">
                <p className="rating--text">Grooming:</p> 
                <div className={singleBreedData?.grooming > 0 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.grooming > 1 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.grooming > 2 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.grooming > 3 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.grooming == 5 ? "brown--bar" : "white--bar"}></div>
              </div>
              <div className="singleBreed--rating__container">
                <p className="rating--text">Intelligence:</p> 
                <div className={singleBreedData?.intelligence > 0 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.intelligence > 1 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.intelligence > 2 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.intelligence > 3 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.intelligence == 5 ? "brown--bar" : "white--bar"}></div>
              </div>
              <div className="singleBreed--rating__container">
                <p className="rating--text">Health issues:</p> 
                <div className={singleBreedData?.health_issues > 0 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.health_issues > 1 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.health_issues > 2 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.health_issues > 3 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.health_issues == 5 ? "brown--bar" : "white--bar"}></div>
              </div>
              <div className="singleBreed--rating__container">
                <p className="rating--text">Stranger friendly:</p> 
                <div className={singleBreedData?.stranger_friendly > 0 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.stranger_friendly > 1 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.stranger_friendly > 2 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.stranger_friendly > 3 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.stranger_friendly == 5 ? "brown--bar" : "white--bar"}></div>
              </div>
              <div className="singleBreed--rating__container">
                <p className="rating--text">Intelligence:</p> 
                <div className={singleBreedData?.intelligence > 0 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.intelligence > 1 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.intelligence > 2 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.intelligence > 3 ? "brown--bar" : "white--bar"}></div>
                <div className={singleBreedData?.intelligence == 5 ? "brown--bar" : "white--bar"}></div>
              </div>
            </div>
          </div>

          <div className="other--photo__container">
            <h2 className="other--photo__title">Other Photo</h2>
            <div className="otherPhoto--image__container">
              {
                imageData?.slice(0, 8).map(image => (
                  <img key={image} src={image} className='other--photo__image'/>
                ))
              }
            </div>

          </div>
          </div>
        }
        
        
      </div>
    </section>
  )
}

export default BreedDescription