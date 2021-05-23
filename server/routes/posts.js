import express from 'express';

const router = express.Router();

// The callback function will be executed once someone visits 
// localhost:5000/posts
router.get('/', (req, res) => {
    res.send("This works!");
})

export default router;