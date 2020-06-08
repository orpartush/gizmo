const express = require('express')
const { getWap, getWaps, deleteWap, updateWap, createWap } = require('./wap.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getWaps)
router.get('/:id', getWap)
router.post('/',  createWap)
router.put('/:id', updateWap)
router.delete('/:id', deleteWap)

module.exports = router