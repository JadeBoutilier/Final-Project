const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

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

const handleDesignerSignIn = async (req, res) => {
    
  const client = new MongoClient(MONGO_URI, options);
 try {

  await client.connect();

  const {designerEmail, designerPassword} = req.body;
  const db = client.db("FinalProject");
  const verifyDesigner = await db.collection("designers").findOne({designerEmail, designerPassword});
  const data= {...verifyDesigner}
  // console.log(designers)

  verifyDesigner
  ? sendResponse(res, 200, data, "Successfully found designer!")
  : sendResponse(res, 404, data, "Could not find designer.") 

} catch (err) {
sendResponse(res, 400, err);
} finally { 
await client.close();
}
}

// ------------------------------------------------------------------------
const getAllDesigners = async (req, res) => {
    
    const client = new MongoClient(MONGO_URI, options);
   try {

    await client.connect();

    const db = client.db("FinalProject");
    const designers = await db.collection("designers").find().toArray(); 
    // console.log(designers)

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

        // const _id = uuidv4();
        const {latt, longt}= await getLatAndLong(req.body.postalCode) //func in utils
        //console.log(getLatAndLong(req.body.postalCode))
        const designer = {...req.body, latt, longt};
        //designer validations - see e-commerce add order

        const db = client.db("FinalProject");

const results = await db.collection("designers").insertOne(designer)
console.log(results);
results.acknowledged
? sendResponse(res, 201, designer, "Designer profile created successfully!")
: sendResponse(res, 400, designer, "Error encountered while creating your designer profile!")
}catch(err){
sendResponse(res, 400, null, `${err}`);
} finally {
      await client.close();

}
}
// -----------------------------------------------------------------------

const updateDesigner= async (req, res)=>{
  const client = new MongoClient(MONGO_URI, options);

  try {
      await client.connect();

      // const _id = uuidv4();
      const {latt, longt}= await getLatAndLong(req.body.postalCode) //func in utils
      //console.log(getLatAndLong(req.body.postalCode))
      const designer = {...req.body, latt, longt};

      // const {public_id } = req.params;
      // await cloudinary.uploader.destroy(public_id)

      const db = client.db("FinalProject");

      const query = { _id : req.body._id };
      delete req.body._id
      const newValues = { $set: { ...req.body} };
console.log(query, newValues)
const results = await db.collection("designers").updateOne(query, newValues)
console.log(results);
results.acknowledged
? sendResponse(res, 201, designer, "Designer profile created successfully!")
: sendResponse(res, 400, designer, "Error encountered while creating your designer profile!")
}catch(err){
sendResponse(res, 400, null, `${err}`);
} finally {
    await client.close();
}

//-------------------------------------------------------------------------------------
  // cloudinary.config({
  //   cloud_name: process.env.CLOUD_NAME,
  //   api_key: process.env.CLOUD_API_KEY,
  //   api_secret: process.env.CLOUD_API_SECRET,
  // });


}
module.exports = { getAllDesigners, addDesigner, getDesignerById, handleDesignerSignIn, updateDesigner  };
