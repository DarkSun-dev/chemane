const dotenv = require('dotenv')
dotenv.config({ path: './config/enviropment.env' })
const port = process.env.PORT || 8000;
const host = process.env.HOST || '0.0.0.0'
const express = require('express')
const path = require('path')
const app = express()


require('./init/db.js')(app, () => {
  require('./init/middleware')(app);
  require('./init/router')(app);
  app.use(express.static(path.join(__dirname, './public')))
  app.set("views", path.join(__dirname, "./public"));
  app.set("view engine", "html");
  app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'index.html')) })
  app.listen(port, (error) => {
    if (error) throw error;
    console.log('Your app is listening on ' + port);
  });
});
