import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
let _client

const createClient = async() => {
  if (!_client) {
    _client = new MongoClient(process.env.MONGO_URL)
    await _client.connect()
  }
  return _client
}
/*const createClient = async() => {
  const client = new MongoClient(process.env.MONGO_URL)
  await client.connect()
  const db = client.db("db2")
  return client
}*/
const getUserCollection = async() => {
  const client = await createClient()
  const db = client.db("db2")
  return db.collection("user")
}

const createUser = async({name,dob,email}) => {
  const userCollection = await getUserCollection()
  await userCollection.insertOne({name, dob, email})
  return {name, dob, email}
   
}

const getUsers = async() => {
const userCollection = await getUserCollection()
const ret = await userCollection.find()
  name: "Zach"

  
return ret.toArray()
}
const run = async() => {
  const client = await createClient()
  await createUser({
  name: "Zach",
  dob: new Date("08/24/1994"),
  email: "jk@yahoo.com"

})
await client.close()
}
run().then()




