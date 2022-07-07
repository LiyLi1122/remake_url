//set modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
const port = process.env.PORT || 3000
require('./config/mongoose')

const app = express()

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set application-level middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes)

//listen server port
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})

































