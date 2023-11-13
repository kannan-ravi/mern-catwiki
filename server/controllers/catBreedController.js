import api from '../config/axiosConnection.js';
import catBreedModel from '../model/catBreedModel.js';

const catBreedController = async (req, res) => {
  try {

    //* Get the data from catapi database
    const response = await api.get(`/breeds`);
    
    //* Map throw every breed and add that to MONGODB
    const result = response.data.map(async (data) => {
      
      const findData = await catBreedModel.findOne({ id: data.id}).exec();

      //* If the data already present don't add any bread data.
      if (!findData) {
        const imageURL = await api.get('/images/search?limit=1&breeds_ids=' + data.id)
        
        const addData = await catBreedModel.create({
          id: data.id,
          name: data.name,
          description: data.description,
          url: imageURL.data[0].url,
          temperament: data.temperament,
          origin: data.origin,
          life_span: data.life_span,
          adaptability: data.adaptability,
          affection_level: data.affection_level,
          child_friendly: data.child_friendly,
          grooming: data.grooming,
          intelligence: data.intelligence,
          health_issues: data.health_issues,
          social_needs: data.social_needs,
          stranger_friendly: data.stranger_friendly,
          popular: 0
        })
      }
    })
    const findAllData = await catBreedModel.find();
    return res.status(201).json(findAllData);
  } catch (error) {
    console.log(error.message) 
  }
}

const catBreedControllerWithID = async(req, res) => {
  if(!req?.params?.id) return res.status(400).json({ 'message': `Cat Breed with ${req?.params?.id} not found.` });

  //* Find the breed with respective ID 
  const findData = await catBreedModel.findOne({ id: req.params.id }).exec();
  if(!findData) return res.status(204).json({ "message": `No cat breed matches ID ${req.params.id}.` });

  findData.popular = findData.popular + 1;
  const result = await findData.save();

  res.json(result)
}
export default { catBreedController, catBreedControllerWithID }