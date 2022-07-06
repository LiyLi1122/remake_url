const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  url_link: {
    type: String,
    required: true
  },
  shorten_link: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Url', urlSchema)










