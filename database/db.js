const mongoose = require('mongoose');
let url = "mongodb://localhost:27017/mediaDB";
let connect = mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser: true });
let autoincrement = require('mongoose-auto-increment');
autoincrement.initialize(mongoose.connection);
let mongoosePaginate=require('mongoose-paginate');

let Schema = mongoose.Schema;

let CatScheme = new Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    since:{type:Date,required:true}
});

let ProductScheme = new Schema({
    cat_id:{type:Number,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    since:{type:Date,required:true}
})

let Cat=mongoose.model('category',CatScheme);
ProductScheme.plugin(autoincrement.plugin,'product');
ProductScheme.plugin(mongoosePaginate);
let Product = mongoose.model('product',ProductScheme);

module.exports={
    Cat,Product
}
