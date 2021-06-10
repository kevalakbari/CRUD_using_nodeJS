const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/useDB")


const url ="mongodb://localhost/personalDB"
const app =express()

mongoose.connect(url)

const con = mongoose.connection;

con.on("open", function () {
        console.log("Database is connected...")
    })

app.use(express.json())

app.use("/useDB",route)



app.listen(9000,()=>{
    console.log("server running...");
})