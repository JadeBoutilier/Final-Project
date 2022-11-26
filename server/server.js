"use strict";

const express = require("express");
const morgan = require("morgan");



express()

    .use(morgan("tiny"))
    .use(express.json())

    .use(express.static("public"))

    // ---------------------------------

    // ---------------------------------

    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

    // Node spins up our server and sets it to listen on port 8000.
    .listen(8000, () => console.log(`Listening on port 8000`));
