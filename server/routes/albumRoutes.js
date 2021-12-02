const router = require('express').Router();
const {Album, User} = require('../models');

// Create new album
router.post('/', async (req, res)=>{
    try{
        const newAlbum = await Album.create(req.body);
        res.status(200).json(newAlbum);
    } catch(err){
        res.status(400).json(err)
    }
})

// Get all albums of a user by user id
router.get("/:user_id", async (req, res) => {
    try {
        const data = await User.find({_id: mongojs.ObjectID(req.params.id)}).populate('album');
        res.status(200).json(data);
    } catch (err){
        res.status(400).json(err);
    }
})

router.post('/', async (req, res)=>{
    try{
        const newAlbum = await Album.create(req.body);
        res.status(200).json(newAlbum);
    } catch(err){
        res.status(400).json(err)
    }
})


























module.exports = router