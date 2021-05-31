import mongoose from 'mongoose';

// Create Mongoose Schema
// Uniformity to our post structure 
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// Turn the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;