const express = require('express')
const router = express.Router()
const make_mixed_string = require('../../make_mixed_string')
const Url = require('../../models/url.js')

//make shorten-url
router.post('/', (req, res) => {
  const base = 'http://localhost:3000/remakeUrls'
  const url_link = req.body.url_link
  const reg = new RegExp(url_link)
  const shorten_link = base + `/${make_mixed_string()}`
  
  Url.find({ url_link: { $regex: reg } })
    .lean()
    .then(result => {       //[{}, {}]
      //no exist
      if (!result.length) { 
        Url.create({ url_link, shorten_link })
          .then(() => res.render('show', { shorten_link }))
          .catch(error => console.log(error))
      //exist
      } else {              
        res.render('show', { shorten_link: result[0].shorten_link })
      }
    })
    .catch(error => console.log(error))
})

//get original link
router.get('/:url', (req, res) => {
  const searchWords = req.params.url
  const reg = new RegExp(searchWords)

  Url.find({ shorten_link: { $regex: reg } })
    .lean()
    .then(result => res.redirect(result[0].url_link))
    .catch(error => console.log(error))
})

module.exports = router