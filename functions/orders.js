const {createClient} = require ("./shoestore.js")

const getOrdersCollection = async() => {
  const client = await createClient()
  const db = client.db("db3")
  return db.collection("orders")
}
exports.createOrders = async({customer, shoes, date}) => {
  const ordersCollection = await getOrdersCollection()
  const ret = await ordersCollection.insertOne({customer, shoes, date})
  return ret.insertedId
}

exports.getOrder = async(id) => {
  const orderCollection = await getOrdersCollection()
  const ret = await orderCollection.findOne(id)
  return ret
  
}