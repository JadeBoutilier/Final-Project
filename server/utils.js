const sendResponse = (res, status, data, message = "No message included.") => {
    return res.status(status).json({ status, data, message });
  };

  const getLatAndLong = async (postalCode) => {

   try {
    const response = await request(`https://geocoder.ca/?locate=${postalCode}&geoit=XML&json=1`)
  
    const latAndLongData= JSON.parse(response)
     const latitude = latAndLongData.latt
     const longitude = latAndLongData.longt
      return {latt: latitude, longt: longitude}
      // {latt: data.latt , longt:data.longt}
    } catch (err) {
      console.log("Error: ", err);
    }
  };

module.exports = { sendResponse, getLatAndLong };