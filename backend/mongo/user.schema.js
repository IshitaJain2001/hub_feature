const mongoose = require('mongoose')
    const userSchema= new mongoose.Schema({
        name :String,
        location: {
            type: { type: String, default: "Point" },
            coordinates: [Number], // [lng, lat]
          }
    })

    export default mongoose.model("User",userSchema);