const express = require('express');
const mongoose = require('mongoose');
const restoRouter = require('./routes/restoRoutes.js')

const app = express()
app.use(express.json())


mongoose.connect('mongodb+srv://101277841_Renzzi:qw12345@cluster0.prgemqj.mongodb.net/Restaurant?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(restoRouter);

app.listen(3000, () => { console.log('Server is running...') });