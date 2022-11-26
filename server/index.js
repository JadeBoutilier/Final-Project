const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const port = 8000;

const { getAllDesigners , addDesigner} = require("./handlers");

express()
    .use(express.json())
    .use(helmet())
    .use(morgan("tiny"))

    
    .get("/designers", getAllDesigners)
    .post("/add-designer" , addDesigner)







    .listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });

