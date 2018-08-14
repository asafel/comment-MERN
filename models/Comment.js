const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    gravatar: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Comment = mongoose.model('comment', CommentSchema)