const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  original_link: {
    type: String,
    required: true
  },
  shorten_link: {
    type: String,
    required: true
  },
  check_str: {
    type: String,
    required: true
  },
  check_case: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Url', urlSchema)










