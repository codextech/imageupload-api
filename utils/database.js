const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://codextech:tanzeel10@cluster0.pbw0d.mongodb.net/photoprojects?retryWrites=true&w=majority'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))