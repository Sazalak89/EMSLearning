
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: {type :String , require : true},
    lastname: {type :String , require : true},
    email: {type :String , require : true },
    password: {type :String , require : true},
    mobile_number: Number
});


var User = mongoose.model('User', userSchema);
module.exports = User;
