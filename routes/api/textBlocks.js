const express = require('express')
const router = express.Router()
const textBlocksCtrl = require('../../controller/api/textBlocks')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, textBlocksCtrl.index)
router.post('/', ensureLoggedIn, textBlocksCtrl.create)
router.delete('/:id', ensureLoggedIn, textBlocksCtrl.delete)

module.exports = router