// models/userModel.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    firstName: {
        type: String,
        field: 'first_name',
    },
    lastName: {
        type: String,
        field: 'last_name',
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;