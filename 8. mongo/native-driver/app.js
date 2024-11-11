const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://localhost:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const database = client.db("local");
        const myNewCollection = database.collection("myNewCollection");
        const query = {};
        const options = {
            // sort matched documents in descending order by rating
            sort: { "imdb.rating": -1 },
            // Include only the `title` and `imdb` fields in the returned document
            projection: { _id: 1, title: 1, imdb: 1 },
        };
        const cursor = await myNewCollection.find(query);
        // print a message if no documents were found
        if ((await myNewCollection.countDocuments(query)) === 0) {
            console.log("No documents found!");
        }
        for await (const doc of cursor) {
            console.dir(doc);
        }
        //console.log(entry_sample);
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        const result = await myNewCollection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

        const docs = [
            { name: "cake", healthy: false },
            { name: "lettuce", healthy: true },
            { name: "donut", healthy: false }
        ];
        // this option prevents additional documents from being inserted if one fails
        const options2 = { ordered: true };
        const result2 = await myNewCollection.insertMany(docs, options2);
        console.log(`${result2.insertedCount} documents were inserted`);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

// The async keyword tells JavaScript that the function will return a Promise.Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved or rejected.
