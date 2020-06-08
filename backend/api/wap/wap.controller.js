const wapService = require('./wap.service')

async function getWaps(req, res) {
    const waps = await wapService.query(req.body)
    res.send(waps)
}

async function getWap(req, res) {
    const wap = await wapService.getById(req.params.id)
    res.send(wap)
}


async function deleteWap(req, res) {
    await wapService.remove(req.params.id)
    res.end()
}

async function updateWap(req, res) {
    const wap = req.body;
    await wapService.update(wap)
    res.json(wap)
}

async function createWap(req, res) {
    const wap = req.body;
    await wapService.add(wap)
    res.send(wap)
}


module.exports = {
    getWap,
    getWaps,
    deleteWap,
    updateWap,
    createWap,
}