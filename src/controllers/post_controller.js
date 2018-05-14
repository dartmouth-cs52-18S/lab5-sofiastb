import Post from '../models/post_model';
import User from '../models/user_model';

// The controller functions used to GET, POST, PUT, and DELETE data in my mongodb
// database. I used this url to familiarize myslef with Mongoose CRUD functions:
// https://coursework.vschool.io/mongoose-crud/

export const createPost = (req, res) => {
  User.findOne({ _id: req.user.id })
    .then((data) => {
      const post = new Post();
      post.title = req.body.title;
      post.tags = req.body.tags;
      post.content = req.body.content;
      post.cover_url = req.body.cover_url;
      post.author = req.user.id;
      post.username = data.username;
      post.save()
        .then((response) => {
          console.log(response);
          res.send(response);
        })
        .catch((err) => {
          if (err) {
            res.sendStatus(500);
          }
        });
    })
    .catch((err) => {
      res.send(err);
    });
};

export const getPosts = (req, res) => {
  Post.find({}).then((data) => {
    res.send(data);
  })
    .catch((err) => {
      console.log(err);
    });
};

export const getPost = (req, res) => {
  Post.findOne({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(500);
      }
    });
};

// used this StackOverflow post to figure out the { new: true } trick: https://stackoverflow.com/questions/32811510/mongoose-findoneandupdate-doesnt-return-updated-document
export const updatePost = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    cover_url: req.body.cover_url,
  }, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};
