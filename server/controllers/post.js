import PostMessage from '../models/postMessage';

// These are handlers for all of our routes
// It handles the logic for all our routes

export const getPosts = (req, res) => {
    // Find is an async function
    try {
        const postMessage = await PostMessage.find();

        res.status(200).console.log(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
})

export const createPost = (req, res) => {
    res.send("Post Creation!");
})