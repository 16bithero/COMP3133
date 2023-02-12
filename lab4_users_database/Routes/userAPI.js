const express = require('express');
const userModel = require('../Model/UserModel');
const app = express();

//http://localhost:3000/users
app.post('/users', async(req,res) => {
    const users = new userModel(req.body)

    try{
        await users.save((err) => {
          if(err){
            res.send(err)
          }else{
            res.send(users);
          }
        });
      } catch (err) {
        res.status(500).send(err);
      }
})

module.exports = app