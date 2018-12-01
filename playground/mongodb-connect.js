// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err) {
		return console.log('Unable to connect to MongoDB Server')
	}
	console.log('Connected to MongoDB server');

// db.collection('Todos').insertOne({
// text: 'Something to do',
// completed: false
// }, (err,result) => {
// if (err) {
// 	return console.log('Unable to insert todo', err);
// }

// console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.collection('Users').insertOne({
// 	name: 'Nelson',
// 	age: 25,
// 	location: 'Miami'
// }, (err,result) => {
// 	if (err){
// 		return console.log('Unable to insert User', err);
// 	}
// 	console.log(result.ops);
// })
db.close();
});