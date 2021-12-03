const router = require('express').Router();
const {Image, Subject} = require('../models');

// Create new image
router.post('/', async (req, res)=>{
    try{
        const data = await Image.create(req.body);
        res.status(200).json(data);
    } catch(err){
        res.status(400).json(err)
    }
})

// Delete image by image id
router.delete('/:id', async (req, res)=>{
    try{
        const data = await Image.remove(req.params.id);
        res.status(200).json(data);
    } catch(err){
        res.status(400).json(err)
    }
})

// Get all images from an album by album id
router.get("/album/:album_id", async (req, res) => {
    try {
        const data = await Album.find({_id: mongojs.ObjectID(req.params.album_id)}).populate('images');
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})


// Get all images of a subject by subject id
router.get("/subject/:subject_id", async (req, res) => {
    try {
        const data = await Subject.find({_id: mongojs.ObjectID(req.params.subject_id)}).populate('images');
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})

// Update image by image id (after subject is added or removed) (req.body is new array of subjects)
router.put("/update/:id", async (req, res) => {
    try {
        const data = await Image.findByIdAndUpdate({_id: mongojs.ObjectID(req.params.id)}, {$set:{subjects:req.body}});
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})

module.exports = router