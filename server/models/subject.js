const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    albums: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Album',
        },
    ],
    images: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Image',
        },
    ],
})

const Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject