const textBlock = require('../../models/textBlock');
const TextBlock = require('../../models/textBlock')
const Title = require('../../models/title')
const mongoose = require('mongoose')

module.exports = {
    index,
    create,
    delete: deleteTextBlock,
    update
}

async function index (req, res) {
    try {
        const textBlocks = await TextBlock.find({ user: req.user._id });
        res.json(textBlocks)
        console.log(textBlocks)
    } catch (err) {
        console.log(err)
    res.status(400).json(err)}} 

async function create(req, res) {
    try {
        req.body.user = req.user._id
        const textBlock = await TextBlock.create(req.body)
        console.log(textBlock)
        res.json(textBlock)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteTextBlock(req, res) {
    try {
        console.log(req.params)
        const textBlock = await TextBlock.findOneAndDelete({"_id": req.params.id})
        res.json(textBlock)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)  
    }
}

async function update (req, res) {
    console.log("updatectrl: ", req.body.editTextBlock)
    try {
        const updateTextBlock = await TextBlock.findByIdAndUpdate(req.params.id, { "text": req.body.editTextBlock }, {new : true, runValidators : true})
            console.log("updateTextBlock: ", req.body)
            res.json(updateTextBlock)
    } catch (err) {
        console.log(err)
    res.status(400).json(err)}} 