const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const port = 8000;

//designer
const { getAllDesigners, addDesigner, getDesignerById, handleDesignerSignIn} = require("./handlers/designerHandlers");

//user
const { handleUserSignIn, getUserById} = require("./handlers/userHandlers");
express()
    .use(express.json())
    .use(helmet())
    .use(morgan("tiny"))


    .get("/designers", getAllDesigners)
    .get("/designer/:_id", getDesignerById)
    .post("/add-designer" , addDesigner)
    .post("/sign-in", handleDesignerSignIn) // multiple calls to same endpoint?
    
    
    .post("/sign-in", handleUserSignIn)
    .get("/user/:_id", getUserById)





    .listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });

