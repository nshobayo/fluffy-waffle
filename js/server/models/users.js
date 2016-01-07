/**
 * Created by Nisola on 1/7/16.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.schema({

    facebook: {
        id: String,
        token : String,
        name: String,
        email: String
    },
    google: {
        id: String,
        token : String,
        name: String,
        email: String
    },
    oauth: {
        id: String,
        token : String,
        name: String,
    }
});

modules.exports = mongoose.model('User', userSchema);

