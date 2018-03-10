const MongoClient = require("mongodb").MongoClient;
const settings = require("./settings");
const mongoConfig = settings.mongoConfig;

let fullMongoUrl = "mongodb://kmorel:pwd@cluster0-shard-00-00-gfuw3.mongodb.net:27017,cluster0-shard-00-01-gfuw3.mongodb.net:27017,cluster0-shard-00-02-gfuw3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
//let fullMongoUrl = `${mongoConfig.serverUrl}${mongoConfig.database}`;
let _connection = undefined;
let _db = undefined;

module.exports = async () => {
	if (!_connection) {
		_connection = await MongoClient.connect(fullMongoUrl);
        _db = await _connection.db(mongoConfig.database);
	}
	return _db;
};
