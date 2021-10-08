const { MongoClient } = require ('mongodb')
const dotenv = require ('dotenv')

dotenv.config()

let _client = new MongoClient(process.env.MONGO_URL)
let isConnected = false

exports.createClient = async () => {
  if (!isConnected) {
    await _client.connect()
    isConnected = true
  }
  return _client
}

/*export const getCustomerCollection = async() => {
  const client = await createClient()
  const db = client.db("db3")
  return db.collection("customers")
}

export const createCustomer = async({name,lastName, address, email}) => {
  const userCollection = await getCustomerCollection()
  const ret = await userCollection.insertOne({name,lastName, address, email})
  return ret.insertedId
}

export const getShoesCollection = async() => {
  const client = await createClient()
  const db = client.db("db3")
  return db.collection("shoes")
}
export const createShoes = async({type,color, size, price}) => {
  const shoesCollection = await getShoesCollection()
  const ret = await shoesCollection.insertOne({type,color, size, price})
  return ret.insertedId
}
export const getOrdersCollection = async() => {
  const client = await createClient()
  const db = client.db("db3")
  return db.collection("orders")
}
export const createOrders = async({customer, shoes, date}) => {
  const ordersCollection = await getOrdersCollection()
  const ret = await ordersCollection.insertOne({customer, shoes, date})
  return ret.insertedId
}

export const getOrder = async() => {
  const orderCollection = await getOrdersCollection()
  const ret = await orderCollection.findOne({"_id": ObjectId("61560b0ef3623626d60cd5d1")})
  return ret.toArray()
  
}

/*const run = async() => {
  const client = await createClient()

  let customerId = await createCustomer({
  name: faker.name.firstName(),
  lastName:faker.name.lastName(),
  address: faker.address.streetAddress(),
  email: faker.internet.email()

})

let shoeId = await createShoes({
  type: faker.commerce.productMaterial(),
  color: faker.commerce.color(),
  size: faker.datatype.number(12),
  size: faker.commerce.price()
})

let orderId = await createOrders({
  customer: customerId,
  shoes: shoeId,
  date: faker.datatype.datetime()

})
await client.close()
}
run().then()

/*const run = async() => {
  const client = await createClient()

  await getOrder({
    
  }}*/

