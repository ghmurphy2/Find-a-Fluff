const router = require('express').Router();
const {User} = require('../models');

// Create new user
router.post('/', async (req, res)=>{
    try{
        const data = await User.create(req.body);
        res.status(200).json(data);
    } catch(err){
        res.status(400).json(err)
    }
})

module.exports = router