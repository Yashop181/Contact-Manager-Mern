const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact')
router.get("/", async (req,res)=>{
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//create  a new contact
router.post("/", async (req,res)=>{
    const {name,email,phone} = req.body;
    const newContact = new Contact({name,email,phone});

    try {
        const contact = await newContact.save();
        res.status(201).json(contact)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

router.put("/:id", async (req,res)=>{
    const {name,email,phone} = req.body;

    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id,{name,email,phone},{new:true})
        res.json({message: 'Edited'})
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async(req,res)=> {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({message: 'Deleted'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
module.exports = router;