const Comment = require('../models/comment.model');

module.exports.new = (req, res) => {
  console.log(req.body);
  let comment = new Comment({
    fb_id: req.user.fb_id,
    name: req.user.name,
    profile_photo: req.user.profile_photo,
    fb_url: req.user.fb_url,
    content: req.body.content
  })

  comment.save(err => {
    if (err) {
      console.log(err);
      res.status(501).send(err);
    } else {
      res.sendStatus(201);
    }
  })
} // new()

module.exports.all = (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(comments);
    }
  });
} // all()
