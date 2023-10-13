const mongoose = require('mongoose')
const Schema = mongoose.Schema

const titleSchema = new Schema ({
    title: {type: String, required: true},
    textBlocks: {type: Schema.Types.ObjectId, ref: "TextBlock"},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true}
}, {timestamps: true})


module.exports = mongoose.model('Title', titleSchema)