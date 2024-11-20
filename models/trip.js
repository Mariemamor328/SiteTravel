const mongoose = require('mongoose');
const schema = mongoose.Schema;
const tripSchema = new schema({
  Destination: {type:String},
  Description: {type:String},
  NumbrePlace: {type:Number , default:"20"},
  Hotel: {type:String},
  DescripHotel: {type:String},
  Price: {type:Number},
  ImageDestination: {type:String},
  VideoDestination: {type:String},
  ImageHotel: {type:String},
  Imagefood: {type:String},

  Reservation: [
    {
      user: String,
      partenair: {
        name: String,
        phone: String
      },
      NumbrePlace: Number
    }
  ]

});


module.exports= trip = mongoose.model("trip", tripSchema)