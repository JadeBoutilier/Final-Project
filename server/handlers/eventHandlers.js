const { sendResponse, getLatAndLong } = require("../utils");
const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// ------------------------------------------------------------------------

const getAllEvents = async (req, res) => {
    
    const client = new MongoClient(MONGO_URI, options);
   try {

    await client.connect();

    const db = client.db("FinalProject");
    const events = await db.collection("events").find().toArray(); 
    // console.log(designers)

    events
    ? sendResponse(res, 200, events, "Successfully retrieved all events!")
    : sendResponse(res, 404, events, "Could not find events!") 

} catch (err) {
  sendResponse(res, 400, err);
} finally { 
  await client.close();
}
}
// -----------------------------------------------------------------------
const getDesignerById = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
  
    try {
    await client.connect();
     const _id = req.params._id;

    const db = client.db("FinalProject");
    const designer = await db.collection("designers").findOne({ _id });
    // console.log(designer)

    designer
    ? sendResponse(res, 200, designer, "Successfully designer!")
    : sendResponse(res, 404, designer, "Could not find designer!") 

} catch (err) {
  sendResponse(res, 400, err);
} finally { 
  await client.close();
}
}
// -----------------------------------------------------------------------

const addDesigner= async (req, res)=>{
    const client = new MongoClient(MONGO_URI, options);

    try {
        await client.connect();

        const _id = uuidv4();
        const {latitude, longitude}= getLatAndLong(req.body.postalCode) //func in utils
        const designer = {...req.body.designer, _id, latitude, longitude};
        //designer validations - see e-commerce add order

        const db = client.db("FinalProject");

const results = await db.collection("designers").insertOne(designer)

return results
? sendResponse(res, 201, results, "Designer profile created successfully!")
: sendResponse(res, 400, results, "Error encountered while creating your designer profile!")
}catch(err){
sendResponse(res, 400, null, `${err}`);
} finally {
      await client.close();

}
}

module.exports = { getAllEvents, };
