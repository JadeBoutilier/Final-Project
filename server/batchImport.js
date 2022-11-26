const {MongoClient} = require("mongodb");

const designers = require("./data/designers.json");
const users = require("./data/users.json");
const events = require("./data/events.json")

require("dotenv").config();
const {MONGO_URI} = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const batchImport =async() => {
const client = new MongoClient(MONGO_URI, options);

try{
    await client.connect();
    
    const db = await client.db("FinalProject");
    console.log("database connected!");

    console.log(`designers: ${designers.length} items to be inserted to database`);
    console.log(`users: ${users.length} items to be inserted to database`);
    console.log(`events: ${events.length} items to be inserted to database`);
    const designersInsert = await db.collection("designers").insertMany(designers);
    const usersInsert = await db.collection("users").insertMany(users);
    const eventsInsert = await db.collection("events").insertMany(events);

    // console.log(designersInsert);
    // console.log(usersInsert);
    // console.log(eventsInsert);


}catch(err){
    console.log(err);
} finally {
    client.close();
    console.log("database disconnected!")
}
}

batchImport();