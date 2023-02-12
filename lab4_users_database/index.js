const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userAPI')

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://101277841_Renzzi:qw12345@cluster0.prgemqj.mongodb.net/Users?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});


app.use(userRoute);

app.listen(3000, () => { console.log('Server is running...') });