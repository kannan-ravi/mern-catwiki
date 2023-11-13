import mongoose, { Schema } from 'mongoose';

const catBreedSchema = new Schema({
  id: String,
  name: String,
  description: String,
  url: String,
  temperament: String,
  origin: String,
  life_span: String,
  adaptability: Number,
  affection_level: Number,
  child_friendly: Number,
  grooming: Number,
  intelligence: Number,
  health_issues: Number,
  social_needs: Number,
  stranger_friendly: Number,
  popular: {
    type: Number,
    default: 0
  }
})

const catBreedModel = mongoose.model('CatData', catBreedSchema);

export default catBreedModel