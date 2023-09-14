const express = require('express');
const router = express.Router();
const Room = require("../models/rooms.js")

//post Room
router.post("/",async(req,res)=>{

    const newRoom= new Room(req.body);
  

try {
    const savedRoom=newRoom.save()
    res.status(200).json(newRoom)
} catch (error) {
    res.status(500).json(err)
    
}

})
//get all
router.get("/",async(req,res)=>{

 const Rooms= await Room.find({});
    try {
        res.status(200).json(Rooms);
    } catch (error) {
        res.status(500).json(err)
    }
}
)
//get par id
router.get("/:id", async(req,res)=>{
    const id = req.params.id;
    const room = await Room.findById(id);
    try {
        res.status(200).json(room);
    } catch (error) {
        
        res.status(500).json(err)
    }
    

})


module.exports = router;