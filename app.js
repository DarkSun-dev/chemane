const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const port = process.env.PORT || 2000

const express = require('express')
const path = require('path')
const app = express()

dotenv.config({ path: './DesignPattern/singleton.env' })
require('./init/db.js')
require('./init/middleware')(app)
require('./init/router')(app)

app.use(express.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(express.static(path.join(__dirname, './public')))
app.set("views", path.join(__dirname, "./public"));
app.set("view engine", "html");
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'index.html')) })
app.listen(port, (error) => {
  if (error) throw error;
  console.log('Your app is listening on ' + port);
})
