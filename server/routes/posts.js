import express from 'express';

import { getPosts } from '../controllers/post.js'

const router = express.Router();

// The callback function will be executed once someone visits 
router.get('/', getPosts);
router.post('/', createPost);


export default router;