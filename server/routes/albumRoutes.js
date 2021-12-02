const router = require('express').Router();
const {Album, User} = require('../models');

// Create new album
router.post('/', async (req, res)=>{
    try{
        const data = await Album.create(req.body);
        res.status(200).json(data);
    } catch(err){
        res.status(400).json(err)
    }
})

// Get album by album id
router.get("/:id", async (req, res) => {
    try {
        const data = await Album.find({_id: mongojs.ObjectID(req.params.id)});
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})

// Get all albums of a user by user id
router.get("/:user_id", async (req, res) => {
    try {
        const data = await User.find({_id: mongojs.ObjectID(req.params.user_id)}).populate('album');
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})
// Delete album by album id
router.delete('/:id', async (req, res)=>{
    try{
        const data = await Album.remove(req.params.id);
        res.status(200).json(data);
    } catch(err){
        res.status(400).json(err)
    }
})


























module.exports = router