const express = require("express")
const router = express.Router()
const dataBase = require("../model/useDB")

router.get("/", async (req, res) => {
    // res.send("you are available")
    try {
        const Data = await dataBase.find()
        res.json(Data)
    } catch (err) {
        res.send("error" + err)
    }
 
})
router.get("/:id", async (req, res) => {
    try {
        const Data = await dataBase.findById(req.params.id)
        res.json(Data)
    } catch (err) {
        res.send("error" + err)
    }
 
}) 

router.post("/", async(req,res) => {
    const data = new dataBase({
        name: req.body.name,
        course : req.body.course,
        intrested : req.body.intrested
    })
    try{
        const d1= await data.save()
        res.json(d1)

    }catch(err){
        res.send("error"+ err)
    }

})

router.patch("/:id" , async(req,res)=> {
    try{
        const data = await dataBase.findById(req.params.id)
        data.intrested = req.body.intrested
        const d1 = await data.save()
        res.json(d1)
    }catch(err){
        console.log("error"+ err)
    }
})
router.delete("/:id" , async(req,res)=> {
    try{
        const data = await dataBase.findByIdAndRemove(req.params.id)
        const d1 = await data.remove()
        res.json(d1)
    }catch(err){
        console.log("error"+ err)
    }
})

/* router.post("/", async(req, res) => {
    const Data = await new dataBase({
        name : req.body.name,
        course : req.body.course,
        intrested : req.body.intrested

    })
    try{
        const d1 = Data.save()
        res.json(d1)
    }catch(err) {
        console.log("error")
    }
})  */

module.exports = router