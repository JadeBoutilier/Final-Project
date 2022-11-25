"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

const {

} = require("./handlers");

express()

    .use(morgan("tiny"))
    .use(express.json())

    // Any requests for static files will go into the public folder
    .use(express.static("public"))

    // Nothing to modify above this line
    // ---------------------------------
    
    .get("/get-designers", )
    .get("/api/get-flight/:flight", getFlight)
    .get("/api/get-reservations", getReservations)
    .get("/api/get-reservation/:reservation", getSingleReservation)

    .post("/api/add-reservation", addReservation)

    .patch("/api/update-reservation/:reservation", updateReservation)

    .delete("/api/delete-reservation/:reservation", deleteReservation)

    // ---------------------------------
    // Nothing to modify below this line

    // this is our catch all endpoint.
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

    // Node spins up our server and sets it to listen on port 8000.
    .listen(8000, () => console.log(`Listening on port 8000`));
