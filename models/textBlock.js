const mongoose = require('mongoose')
const Schema = mongoose.Schema

const textBlockSchema = new Schema ({
    header: {type: String, required: true},
    text: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true}
}, {timestamps: true})


module.exports = mongoose.model('TextBlock', textBlockSchema)