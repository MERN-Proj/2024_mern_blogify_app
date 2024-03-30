import mongoose from 'mongoose';

//schema
const profanityFilterSchema = new mongoose.Schema({
  bannedWords: [String],
});

//model
const ProfanityFilter = mongoose.model(
  'ProfanityFilter',
  profanityFilterSchema,
);
export default ProfanityFilter;
