const { sendResponse} = require("../utils");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// ------------------------------------------------------------------------
const handleUserSignIn = async (req, res) => {
    
  const client = new MongoClient(MONGO_URI, options);
 try {

  await client.connect();

  const {userEmail, userPassword} = req.body;
//   console.log(req.body)
  const db = client.db("FinalProject");
  const verifyUser = await db.collection("users").findOne({userEmail, userPassword});
  // console.log(verifyUser)
  const data= {...verifyUser}
  // console.log(designers)

  verifyUser
  ? sendResponse(res, 200, data, "Successfully found user!")
  : sendResponse(res, 404, data, "Could not find user.") 

} catch (err) {
sendResponse(res, 400, err);
} finally { 
await client.close();
}
}
// -----------------------------------------------------------------------
const getUserById = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
  
    try {
    await client.connect();
     const _id = req.params._id;

    const db = client.db("FinalProject");
    const user = await db.collection("users").findOne({ _id });
    // console.log(designer)

    user
    ? sendResponse(res, 200, user, "Successfully user!")
    : sendResponse(res, 404, user, "Could not find user!") 

} catch (err) {
  sendResponse(res, 400, err);
} finally { 
  await client.close();
}
}
// -----------------------------------------------------------------------

// const addFavouriteDesignerById= async (req, res)=>{
//   const client = new MongoClient(MONGO_URI, options);

//   try {
//       await client.connect();
//       const designer = {...req.body, latt, longt};
//       //designer validations - see e-commerce add order

//       const db = client.db("FinalProject");

// const results = await db.collection("user").insertOne(designer.brand)
// console.log(results);

// results.acknowledged
// ? sendResponse(res, 201, designer, "Designer profile created successfully!")
// : sendResponse(res, 400, designer, "Error encountered while creating your designer profile!")
// }catch(err){
// sendResponse(res, 400, null, `${err}`);
// } finally {
//     await client.close();

// }
// }

// -----------------------------------------------------------------------












// -----------------------------------------------------------------------


module.exports = {handleUserSignIn, getUserById };
