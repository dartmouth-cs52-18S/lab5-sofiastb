import Post from '../models/post_model';

// The controller functions used to GET, POST, PUT, and DELETE data in my mongodb
// database. I used this url to familiarize myslef with Mongoose CRUD functions:
// https://coursework.vschool.io/mongoose-crud/

export const createPost = (req, res) => {
  const post = new Post();
  console.log(req.body);
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.content = req.body.content;
  post.cover_url = req.body.cover_url;
  post.save()
    .then((response) => {
      console.log('should have created?');
      console.log(response);
      res.send(response);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(500);
      }
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
      console.log(response);
      res.send(response);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(500);
      }
    });
};

export const updatePost = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {
    title: req.params.post.title,
    content: req.params.post.content,
    tags: req.params.post.tags,
    cover_url: req.params.post.cover_url,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};
