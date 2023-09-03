

const { MongoClient } = require('mongodb')

const databaseMiddleware = async (req, res, next) => {
  try{
  const mongoClient = await new MongoClient("mongodb://mongo:GgwGIZiQ581LE8hqygnS@containers-us-west-110.railway.app:7534").connect()
  db = mongoClient.db('assignment-11')
  
  req.db = db
  
  next()
}
  catch (error) {
  console.log(error, `<=================== error ==================`);
}
}

module.exports = databaseMiddleware
