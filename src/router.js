import { Router } from 'express';
import * as Posts from './controllers/post_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.post('/posts', Posts.createPosts);
router.get('/posts', Posts.createPosts);

router.get('/posts/:id', Posts.getPost);
router.put('/posts/:id', Posts.updatePost);
router.delete('/posts/:id', Posts.deletePost);

// /your routes will go here

export default router;
