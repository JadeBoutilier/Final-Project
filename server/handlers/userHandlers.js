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
  const db = client.db("FinalProject");
  const verifyUser = await db.collection("users").findOne({userEmail, userPassword});
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


module.exports = {handleUserSignIn, getUserById };
