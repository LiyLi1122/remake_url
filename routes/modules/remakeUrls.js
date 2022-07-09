const express = require('express')
const router = express.Router()
const make_mixed_string = require('../../make_mixed_string')
const Url = require('../../models/url.js')

//make shorten-url
router.post('/', (req, res) => {
  const url_link = req.body.url_link.split(',')
  const base = 'http://localhost:3000/remakeUrls'
  const check_case = make_mixed_string()
  const shorten_link = base + `/${check_case}`
  const original_link = url_link[0]
  const check_str = url_link[2]
  
  Url.findOne({check_str})
    .lean()
    .then(result => {
      //no exist -> null
      if (!result) {
        Url.create({ original_link, shorten_link, check_str, check_case})
          .then(() => res.render('show', { shorten_link }))
          .catch(error => console.log(error))
      //exist -> {key: value}
      } else {     
        console.log(result)         
        res.render('show', { shorten_link: result.shorten_link })
      }
    })
    .catch(error => console.log(error))
  
})

//get original link
router.get('/:url', (req, res) => {
  const searchWords = req.params.url

  Url.findOne({ check_case: searchWords })
    .lean()
    .then(result => {
      res.redirect(result.original_link)})
    .catch(error => console.log(error))
})

module.exports = router