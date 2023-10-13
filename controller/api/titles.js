const Title = require('../../models/title')
const TextBlock = require('../../models/textBlock')

module.exports = {
    index,
    create,
    delete: deleteTitle,
    getId,
    // edit,
    // update
}

async function index (req, res) {
    try {
        const titles = await Title.find({ user: req.user._id})
        console.log(req.user)
        res.json(titles)
    } catch (err) {
        console.log(err)
    res.status(400).json(err)} 
}

async function create(req, res) {
    console.log(req.user)
    try {
        // console.log("hitting titlectrl/create with: ", req.user._id)
        req.body.user = req.user._id
        
        const title = await Title.create(req.body)
        console.log(title)
        res.json(title)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteTitle(req, res) {
    try {
        console.log(req.params)
        const titleTextBlocks = await TextBlock.remove({"title": req.params.id})
        const title = await Title.findOneAndDelete({"_id": req.params.id})
        res.json(title, titleTextBlocks)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)  
    }
}

async function getId(req, res) {
    try {
        const title = await Title.find({"title": req.body})
        console.log("hitting getId ", title)
        res.json(title)
    } catch(err) {
        res.status(400).json(err)  
    }
}