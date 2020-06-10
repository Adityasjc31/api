const mongoose = require('mongoose');
const databaseScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    visit:
    {
        type:Boolean,
        required:true,
        default:false
    }
});
module.exports=mongoose.model("DataBase",databaseScheme);