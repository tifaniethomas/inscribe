const mongoose = require('mongoose')
const Schema = mongoose.Schema

const textBlockSchema = new Schema ({
    title: {type: Schema.Types.ObjectId, ref: "Title", required: true},
    text: {type: String, required: true},
    position: {type: Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true}
}, {timestamps: true})


module.exports = mongoose.model('TextBlock', textBlockSchema)