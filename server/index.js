const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const port = 8000;

const { getAllDesigners, addDesigner, getDesignerById, } = require("./handlers");

express()
    .use(express.json())
    .use(helmet())
    .use(morgan("tiny"))


    .get("/designers", getAllDesigners)
    .get("/designer/:_id", getDesignerById)
    .post("/add-designer" , addDesigner)







    .listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });

