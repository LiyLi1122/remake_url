//set modules
const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

//set mongoDB
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URL)
const db = mongoose.connection
db.on('error', () => console.log('error'))
db.once('open', () => console.log('mongoDB connect!'))

const app = express()

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set application-level middleware
app.use(express.static('public'))

//set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/remakeUrls', (req, res) => {
  res.render('show')
})

//listen server
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})

































