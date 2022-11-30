
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const port = 8000;

//designer
const { getAllDesigners, addDesigner, getDesignerById, handleDesignerSignIn, updateDesigner} = require("./handlers/designerHandlers");
//user
const { handleUserSignIn, getUserById} = require("./handlers/userHandlers");
//events
const { getAllEvents } = require("./handlers/eventHandlers");
const {getLatAndLong} = require("./utils")

express()
    .use(express.json())
    .use(helmet())
    .use(morgan("tiny"))


    .get("/designers", getAllDesigners)
    .get("/designer/:_id", getDesignerById)
    .post("/add-designer" , addDesigner)
    .post("/designer-sign-in", handleDesignerSignIn)
    .patch("/designer/update" , updateDesigner)
    
    
    .post("/user-sign-in", handleUserSignIn)
    .get("/user/:_id", getUserById)
//events
    .get("/events", getAllEvents)
    .get("/latandlong" , getLatAndLong)


    .listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
