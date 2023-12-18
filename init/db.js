const mongoose = require('mongoose')
const mongoUrl = process.env.MONGODB_URL
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))
.catch(error => console.log({error}))
