const mongoose = reuqire('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    uploadedAt: {
        type:Date,
        default: Date.now
    },
    href: {
        type:String,
        required: true
    },
    album: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Album',
        },
    ],
    user: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
    ],
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image