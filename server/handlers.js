const { sendResponse, getLatAndLong } = require("../server/utils");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// ------------------------------------------------------------------------
const getAllDesigners = async (req, res) => {
    
    const client = new MongoClient(MONGO_URI, options);
   try {

    await client.connect();

    const db = client.db("FinalProject");
    const designers = await db.collection("designers").find().toArray(); 
    console.log(designers)

    designers
    ? sendResponse(res, 200, designers, "Successfully retrieved all designers!")
    : sendResponse(res, 404, designers, "Could not find designers!") 

} catch (err) {
  sendResponse(res, 400, err);
} finally { 
  await client.close();
}
}
// -----------------------------------------------------------------------

const addDesigner= async()=>{
    const client = new MongoClient(MONGO_URI, options);

    try {
        await client.connect();

        const _id = uuidv4();
        const {latitude, longitude}= getLatAndLong(req.body.postalCode) //func in utils
        //designer validations - see e-commerce add order
        const designer = {...req.body.designer, _id, latitude, longitude};

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

module.exports = { getAllDesigners, addDesigner };
