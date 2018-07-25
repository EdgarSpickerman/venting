if(!process.env.NODEENV) require("dotenv").config();
const express = require("express");
const {join} = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

app
  .use(express.static(join(__dirname,"../build")))
  .listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
  })