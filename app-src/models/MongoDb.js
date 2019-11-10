const MongoClient = require('mongodb').MongoClient;
import assert from 'assert';
// Connection URL
const url = 'mongodb://192.168.0.22:27017';
// Database Name
const dbName = 'scout_volei';
// Create a new MongoClient
const client = new MongoClient(url);
// Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   client.close();
// });

export class Mongo {

    conexaoDb(){
        return client;

    }
}



