const mongoose = require('mongoose');

let db;
module.exports= function Connection(){
    if(!db){
        db = mongoose.connect('mongodb://127.0.0.1:27017/crud-example')
    }
    return db;
}