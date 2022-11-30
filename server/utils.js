const request = require("request-promise")

const sendResponse = (res, status, data, message = "No message included.") => {
    return res.status(status).json({ status, data, message });
  };

  const getLatAndLong = async (postalCode) => {

   try {
    const response = await request(`https://geocoder.ca/?locate=${postalCode}&geoit=XML&json=1`)
  
    const latAndLongData= await JSON.parse(response)
      return {latt: latAndLongData.latt, longt: latAndLongData.longt}
      

    } catch (err) {
      console.log("Error: ", err);
    }
  };

module.exports = { sendResponse, getLatAndLong };

// const sendResponse = (res, status, data, message = "No message included.") => {
//   return res.status(status).json({ status, data, message });
// };

// const getLatAndLong = async (req,res) => {

//  try {
//   const response = await request(`https://geocoder.ca/?locate=H3C0L7&geoit=XML&json=1`)

//   const latAndLongData= JSON.parse(response)
//    const latitude = latAndLongData.latt
//    const longitude = latAndLongData.longt
//     //return {latt: latitude, longt: longitude}
//     res.status(200).send(response)
//     // {latt: data.latt , longt:data.longt}
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// };
