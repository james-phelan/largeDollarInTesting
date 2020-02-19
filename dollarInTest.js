const inlLength = 1000
const numFinds = 100
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'POCDB';
const client = new MongoClient(url);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function queryBuilder(l) {
    var filterArr = [];
    for (i = 0; i < l; i++) {
        field1 = getRandomInt(50);
        field2 = getRandomInt(50);
        filterArr.push({
            w: field1,
            i: field2
        })
    }
    return query = { "_id": { "$in": filterArr } }
}

client.connect(function(err) {
    const db = client.db(dbName)
    const collection = db.collection('POCCOLL');
    for (j = 0; j < numFinds; j++) {
        query = queryBuilder(inlLength)
        collection.countDocuments(query,
            function(error, result) {
                console.log("Documents Found:", result);
            }
        )
    }
    assert.equal(null, err);
    client.close();
});