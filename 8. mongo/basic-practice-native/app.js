const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017';

let db;

app.use(express.json());

MongoClient.connect(MONGO_URI, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
    console.log('Connected to MongoDB');
    db = client.db('blog');
});

const path = require('path');

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Routes will be added here
app.post('/authors', async (req, res) => {
    const { name, email } = req.body;
    const result = await db.collection('authors').insertOne({ name, email });
    res.json(result.ops[0]);
});

app.post('/posts', async (req, res) => {
    const { title, content, authorId } = req.body;
    const result = await db.collection('posts').insertOne({ title, content, author_id: authorId });
    console.log(result);
    res.json(result);
});

app.get('/posts/:id', async (req, res) => {
    const postId = new ObjectId(req.params.id);
    console.log(postId);
    const post = await db.collection('posts').aggregate([
        { $match: { _id: postId } },
        {
            $lookup: {
                from: 'authors',
                localField: 'author_id',
                foreignField: '_id',
                as: 'author'
            }
        },
        { $unwind: '$author' }
    ]).next();

    res.json(post);
});

//Using Embedded Documents (Denormalization)
app.post('/denormalized/posts', async (req, res) => {
    const { title, content, author } = req.body;
    const result = await db.collection('denormalizedPosts').insertOne({ title, content, author });
    res.json(result);
});

app.get('/denormalized/posts/:id', async (req, res) => {
    const postId = new ObjectId(req.params.id);
    const post = await db.collection('denormalizedPosts').findOne({ _id: postId });
    res.json(post);
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
