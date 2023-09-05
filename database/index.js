const { MongoClient } = require("mongodb");

const MONGO_PROD = `mongodb+srv://marisiman99:<marisiman99>@assignment11.gmy6fu4.mongodb.net/`
const MONGO_URI= `mongodb://127.0.0.1:27017`

const DB_URI = process.env.ENV === 'production' ? MONGO_PROD : MONGO_URI 
const connectToDb = async () => {
  try {
    const mongoClient = await new MongoClient(DB_URI).connect();
    db = mongoClient.db('assignment11')

    console.log(`You have been CONNECTED.. letss goo..!! `);
    return db
  } 
  
  catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;
