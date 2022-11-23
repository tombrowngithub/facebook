const mongoose = require("mongoose")


const LoginsSchema = new mongoose.Schema({
    user_name:{
        type: String,
    },
    password:{
        type: String
    },
    creatAt:{
       type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("facebook-logins", LoginsSchema)