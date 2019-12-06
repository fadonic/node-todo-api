const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client)=>{
 if(err){
     return console.log("Unable to connect to db" + err)
 }

 console.log("Connect to Database");
 const db = client.db("TodoApp");
 db.collection("Todos").insertOne({
     text : "Play game",
     completedAt: false
 }, (err, result)=>{
     if(err){
         return console.log("Unable to insert todo " + err);
     }
     console.log(result)
 })

})