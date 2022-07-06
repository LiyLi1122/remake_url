//set modules
const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const make_mixed_string = require('./make_mixed_string')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Url = require('./models/url.js')
const port = process.env.PORT || 3000

//set mongoDB
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', () => console.log('error'))
db.once('open', () => console.log('mongoDB connect!'))

const app = express()

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set application-level middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

//set routes
app.get('/', (req, res) => {
  res.render('index')
})

//make shorten-url
app.post('/remakeUrls', (req, res) => {
  const base = 'http://localhost:3000'
  const url_link = req.body.url_link
  const reg = new RegExp(url_link)
  let shorten_link = base + `/${make_mixed_string()}`

  Url.find({ url_link: { $regex: reg } })
    .lean()
    .then(result => {
      if (!result[0].url_link.includes(url_link)) {
          Url.create({ url_link, shorten_link })
             .then(() => res.render('show', {shorten_link}))
             .catch(error => console.log(error))
      } else {
        res.render('show', { shorten_link: result[0].shorten_link })
      }
    })
    .catch(error => console.log(error))
})

//get original link
app.get('/:url', (req, res) => {
  const searchWords = req.params.url
  const reg = new RegExp(searchWords)

  Url.find({ shorten_link: { $regex: reg }})
      .lean()
      .then(result => res.redirect(result[0].url_link))
      .catch(error => console.log(error))
})

//listen server
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})

































