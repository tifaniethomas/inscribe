const TextBlock = require('../../models/textBlock.js')

module.exports = {
    index,
    create,
}

async function index (req, res) {
    try {
        const textBlocks = await TextBlock.find({ user: req.user._id})
        console.log(textBlocks, req.user.id)
        res.json(textBlocks)
    } catch (err) {
        console.log(err)
    res.status(400).json(err)} 
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        
        const note = await TextBlock.create(req.body)

        res.json("")
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}