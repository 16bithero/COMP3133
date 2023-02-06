const mongoose = require('mongoose');

const RestoSchema = new mongoose.Schema({
    address: {
        building: {
            type: Number
        },
        street: {
            type: String
        },
        zipcode: {
            type: Number
        }
    },
    city: {
        type: String
    },
    cuisine: {
        type: String
    },
    name:{
        type: String
    },
    restaurant_id: {
        type: Number
    }
})



RestoSchema.query.byRestoList = function(flag){
    return this.sort({'restaurant_id': flag}).select("id city cuisine name restaurant_id");
  }

RestoSchema.statics.getDelicatessen = function(cuisine){
    return this.find({'cuisine': cuisine}).where('city').ne('Brooklyn').select("-_id cuisine name city").sort({'name': 'asc'});
}

const Restaurant = mongoose.model('Restaurant', RestoSchema)
module.exports = Restaurant