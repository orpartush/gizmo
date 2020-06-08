
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add,
}

async function query() {
    // const criteria = _buildCriteria(filterBy)
    const criteria = {}
    const collection = await dbService.getCollection('wap')
    try {
        const waps = await collection.find(criteria).toArray();
        return waps
    } catch (err) {
        console.log('ERROR: cannot find waps')
        throw err;
    }
}

async function getById(id) {
    const collection = await dbService.getCollection('wap')
    try {
        const wap = await collection.findOne({ "_id": ObjectId(id) })
        return wap
    } catch (err) {
        console.log(`ERROR: while finding wap ${id}`)
        throw err;
    }
}

async function remove(wapId) {
    const collection = await dbService.getCollection('wap')
    try {
        await collection.deleteOne({ "_id": ObjectId(wapId) })
    } catch (err) {
        console.log(`ERROR: cannot remove wap ${wapId}`)
        throw err;
    }
}

async function update(wap) {
    const collection = await dbService.getCollection('wap')
    wap._id = ObjectId(wap._id);
    try {
        await collection.replaceOne({ "_id": wap._id }, { $set: wap })
        return wap
    } catch (err) {
        console.log(`ERROR: cannot update wap ${wap._id}`)
        throw err;
    }
}

async function add(wap) {
    const collection = await dbService.getCollection('wap')
    try {
        await collection.insertOne(wap);
        return wap;
    } catch (err) {
        console.log(`ERROR: cannot insert wap`)
        throw err;
    }
}


// function _buildCriteria(filterBy) {
//     const criteria = {};
//     if (filterBy.name) {
//         criteria.name = { $regex: filterBy.name, $options: 'i' }
//     }
//     if (filterBy.type !== 'all') {
//         criteria.type = filterBy.type
//     }
//     if (filterBy.inStock !== 'all') {
//         criteria.inStock = filterBy.inStock;
//     }
//     return criteria;
// }


