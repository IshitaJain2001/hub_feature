const mongoose = require('mongoose')

const driverSchema= new mongoose.Schema({
    name:String,
    location: {
        type: { type: String, default: "Point" },
        coordinates: [Number], // [longitude, latitude]
      },
      isAvailable: Boolean,
})

driverSchema.index({ location: "2dsphere" });

export default mongoose.model("Driver", driverSchema)