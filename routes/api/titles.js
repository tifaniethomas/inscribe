const express = require('express')
const router = express.Router()
const titlesCtrl = require('../../controller/api/titles')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, titlesCtrl.index)
router.get('/:title', ensureLoggedIn, titlesCtrl.getId)
router.post('/', ensureLoggedIn, titlesCtrl.create)
router.delete('/:id', ensureLoggedIn, titlesCtrl.delete)

module.exports = router