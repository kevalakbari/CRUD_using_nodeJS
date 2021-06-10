const mongoose = require("mongoose")

const dbSchema = new mongoose.Schema({
    name:{
        type : String,
        require :true
    },
    course: {
        type : String,
        require :true
    },
    intrested:{
        type : Boolean,
        require : true,
        default : true
    }
})

module.exports= mongoose.model("dataBase",dbSchema)