const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

export const collections = {
  USERS: "users",
};


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export const dbConnect = async (cname) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(cname);
        return collection;
    } catch (error) {
        console.log(error);
    }
}
