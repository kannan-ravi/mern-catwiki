import api from '../config/axiosConnection.js';


const catBreedImagewithID = async (req, res) => {

  try {
    const response = await api.get(`/images/search?limit=15&breed_ids=${req.params.id}&api_key=${process.env.X_API_KEY}`);
    const data = response.data.map(data => data.url)
    res.json(data)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

export default { catBreedImagewithID }