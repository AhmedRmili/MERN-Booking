const express = require('express');
const router = express.Router();
const Hotel = require("../models/hotels.js")
//POST UN HOTEL
router.post("/", async(req,res)=>{
const newHotel = new Hotel(req.body);
 try {
    const savedHotel = newHotel.save();
    res.status(200).json(newHotel);
    
 } catch (error) {
    res.status(500).json(err)
    
 }
})
//get all
router.get("/", async(req,res)=>{
    const  hotels=await Hotel.find({})
     try {
       
        res.status(200).json(hotels);
        
     } catch (error) {
        res.status(500).json()
        
     }
    })
    //get par id
router.get("/:id", async(req,res)=>{
const id = req.params.id;
    const  hotel= await Hotel.findById(id)
     try {
        res.status(200).json(hotel);
        
     } catch (error) {
        res.status(500).json()
        
     }
    })
    //update par id
router.put("/:id", async(req,res)=>{
    const id = req.params.id;

        const  hotel= await Hotel.findByIdAndUpdate(id,req.body)
         try {
            res.status(200).json(hotel);
            
         } catch (error) {
            res.status(500).json()
            
         }
        })
        //delete par id
router.delete("/:id", async(req,res)=>{
    const id = req.params.id;

         await Hotel.findByIdAndDelete(id)
         try {
            res.status(200).json("delete");
            
         } catch (error) {
            res.status(500).json(err)
            
         }
        })
        
    
    

module.exports = router;