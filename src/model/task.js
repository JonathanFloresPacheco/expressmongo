// module.exports = function(){
//     var db = require('../libs/db-connection')();
//     var Schema = require('mongoose').Schema;

//     var Task = Schema({
//         title:String,
//         description: String,
//         status: Boolean
//     })
//     return db.model('tasks',Task);
// }


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var Task = Schema({
            title:String,
            description: String,
            status: Boolean
        });
const task = mongoose.model('tasks',Task);
module.exports =task;
