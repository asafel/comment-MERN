const express = require('express');
var gravatar = require('gravatar');
const router = express.Router();

// Item Model
const Comment = require('../../models/Comment');


// @route  GET api/comments
// @desc   Get all comments
// @access Public
router.get('/', (req, res) => {
    Comment.find()
    .sort({ date: -1 })
    .then(comments => res.json(comments))
});

// @route  GET api/comments/:email
// @desc   Get the last active date of a specific email address
// @access Public
router.get('/:email', (req, res) => {
  Comment.find({ email: req.params.email})
  .sort({ date: -1 })
  .then(comments => res.json(comments[0].date))
});

// @route  POST api/comments
// @desc   Create a comment
// @access Public
router.post('/', (req, res) => {
  const { email, message } = req.body;
  const newComment = new Comment({
    email: email,
    message: message,
    gravatar: gravatar.url(email)
  });

  newComment.save().then(comment => res.json(comment));
});

// @route  DELETE api/comments/:id
// @desc   Delete a comment
// @access Public
// not used at the moment just wrote it for testing etc...
router.delete('/:id', (req, res) => {
    Comment.findById(req.params.id)
      .then(comment => comment.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }))
  });

module.exports = router;