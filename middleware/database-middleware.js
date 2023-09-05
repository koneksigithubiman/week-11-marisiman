
const connectToDb = require("../database")
const { MongoClient } = require('mongodb')

const databaseMiddleware = async (req, res, next) => {
  try {
    const db = await connectToDb()
  
    req.db = db
  
    next();
}

catch (error) {
  console.log(error, `<=================== error ==================`);
}

}

module.exports = databaseMiddleware
