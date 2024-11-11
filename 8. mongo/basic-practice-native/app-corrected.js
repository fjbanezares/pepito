const { log } = require('console');
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017';

let db;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectToDb = async () => {
    const client = await MongoClient.connect(MONGO_URI, { useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    return client.db('blog');
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/authors', async (req, res) => {
    try {
        const { name, email } = req.body;
        console.log("los parametro...s" + name + "y el correo..." + email);

        const result = await db.collection('authors').insertOne({ name, email });
        console.log(result);

        // Check for successful insertion
        if (result.acknowledged && result.insertedId) {
            return res.json({ _id: result.insertedId, name, email });
        } else {
            return res.status(500).json({ error: 'Failed to insert author.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/posts', async (req, res) => {
    try {
        const { title, content, authorId } = req.body;
        const result = await db.collection('posts').insertOne({ title, content, author_id: authorId });
        // Check for successful insertion
        return res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/posts/:id', async (req, res) => {
    try {
        const postId = new ObjectId(req.params.id);
        console.log(postId);

        const result = await db.collection('posts').aggregate([
            { $match: { _id: postId } },
            {
                $lookup: {
                    from: 'authors',
                    localField: 'author_id',
                    foreignField: '_id',
                    as: 'author'
                }
            }
        ]).toArray();

        console.log(result);

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
            { $unwind: { path: "$author", preserveNullAndEmptyArrays: true } }
        ]).next();
        console.log(post);
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/denormalized/posts', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const result = await db.collection('denormalizedPosts').insertOne({ title, content, author });
        // Check for successful insertion
        if (result.acknowledged && result.insertedId) {
            return res.json({ _id: result.insertedId, name, email });
        } else {
            return res.status(500).json({ error: 'Failed to insert author.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/denormalized/posts/:id', async (req, res) => {
    try {
        const postId = new ObjectId(req.params.id);
        const post = await db.collection('denormalizedPosts').findOne({ _id: postId });
        if (!post) {
            return res.status(404).json({ error: 'Denormalized post not found.' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const startServer = async () => {
    db = await connectToDb();
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
};

startServer().catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
});
