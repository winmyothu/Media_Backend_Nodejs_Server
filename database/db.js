const mongoose = require('mongoose');
let url = "mongodb://localhost:27017/mediaDB";
let connect = mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser: true });

let Schema = mongoose.Schema;

let CatScheme = new Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    since:{type:Date,required:true}
});

let Cat=mongoose.model('category',CatScheme);

module.exports={
    Cat
}