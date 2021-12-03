const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    firstName: {type: String, required: true},
    surname: {type: String, required: true},
    mail: {type: String, required: true},
    phoneNum: {type: String, required: true},
    applicText: {type: String, required: true}
});

module.exports = mongoose.model('Application', applicationSchema);