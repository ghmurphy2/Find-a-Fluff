const mongoose = reuqire('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    album: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Album',
        },
    ],
    image: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Image',
        },
    ],
})

const Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject