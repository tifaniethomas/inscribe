const mongoose = require('mongoose')
const Schema = mongoose.Schema

const titleSchema = new Schema ({
    title: {type: String, required: true, unique: true},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true}
}, {timestamps: true})


module.exports = mongoose.model('Title', titleSchema)