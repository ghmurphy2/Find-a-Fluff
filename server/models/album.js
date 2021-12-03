const mongoose = reuqire('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    images:[{
        type: Schema.Types.ObjectId,
        ref: "image"
    }]
    
})

const Album = mongoose.model('Album', albumSchema)

module.exports = Album