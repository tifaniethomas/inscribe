const TextBlock = require('../../models/textBlock')

module.exports = {
    index,
    create,
    delete: deleteTextBlock,
    // edit,
    // update
}

async function index (req, res) {
    try {
        const textBlocks = await TextBlock.find({ user: req.user._id})
        console.log("hitting")
        res.json(textBlocks)
    } catch (err) {
        console.log(err)
    res.status(400).json(err)} 
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        
        const textBlock = await TextBlock.create(req.body)
        console.log(textBlock)
        res.json("")
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteTextBlock(req, res) {
    try {
        const note = await TextBlock.findOneAndDelete({"_id": req.params._id})
        res.json(note)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)  
    }
}

