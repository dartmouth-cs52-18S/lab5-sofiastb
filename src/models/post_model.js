import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: String,
  cover_url: String,
  content: String,
  tags: String,
}, {
  toJSON: {
    virtuals: true,
  },
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
