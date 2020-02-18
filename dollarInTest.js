const inclLength = 1000

// Connection URL
const url = 'mongodb://HOST:PORT';

// Database Name
const dbName = 'POCDB';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const findDocuments = function(db, callback) {

    // Build the query
    var filterArr = [];
    for (i = 0; i < inclLength; i++) {
        filterArr.push({
            w: getRandomInt(50),
            i: getRandomInt(50)
        });
    }
    var query = { "_id": { "$in": filterArr } }

    // Get the POCCOLL collection
    const collection = db.collection('POCCOLL');
    // Find some documents
//     collection.find(query).toArray(function(err, docs) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(docs)
//         callback(docs);
//     });
    
    collection.countDocuments(query, (err, res) => {
        assert.equal(null, err);
        console.log("counting docs", res);
    c   allback(res);
  });
}

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const client = new MongoClient(url);
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    findDocuments(db, function() {
        client.close();
    });
});
