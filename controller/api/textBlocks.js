const TextBlock = require('../../models/textBlock')
const Title = require('../../models/title')
const mongoose = require('mongoose')

module.exports = {
    index,
    create,
    delete: deleteTextBlock,
    // edit,
    // update
}

async function index (req, res) {
    try {
        // const textBlocks = await TextBlock.find({ user: req.user._id, "title.title": req.params.title })
        const titleDoc = await Title.findOne({ title: req.params.title });
    if(!titleDoc) {
        console.log('No matching title found');
    } else {
        const textBlocks = await TextBlock.find({ user: req.user._id, title: titleDoc._id });
        res.json(textBlocks)
    }
        
    } catch (err) {
        console.log(err)
    res.status(400).json(err)} 
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        
        const textBlock = await TextBlock.create(req.body)
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

