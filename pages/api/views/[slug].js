const { MongoClient } = require('mongodb');

const handler = async (req, res) => {
    const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@clusta1.gfbe5.mongodb.net/clusta1?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);

    try{
        await client.connect();
        console.log(await listDatabases(client));
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

export default handler;