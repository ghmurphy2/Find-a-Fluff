
const {Album} = require('../models');

module.exports = {
    async createAlbum(req, res){
        const newAlbum = await Album.create(req.body);
        res.status(200).json(new)
    }





























}