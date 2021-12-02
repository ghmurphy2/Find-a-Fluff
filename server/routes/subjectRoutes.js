const router = require('express').Router();
const {Image, Album, Subject} = require('../models');

// Create new subject
router.post('/', async (req, res)=>{
    try{
        const data = await Subject.create(req.body);
        res.status(200).json(data);
    } catch(err){
        res.status(400).json(err)
    }
})

// Delete subject by subject id
router.delete('/:id', async (req, res)=>{
    try{
        const data = await Subject.remove(req.params.id);
        res.status(200).json(data);
    } catch(err){
        res.status(400).json(err)
    }
})

// Update subject information by subject id
router.put("/update/:id", async (req, res) => {
    try {
        const data = await Subject.findByIdAndUpdate({_id: mongojs.ObjectID(req.params.id)}, {$set:{name:req.body.name}});
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})