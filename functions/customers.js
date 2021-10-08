
const {createClient} = require ("./shoestore.js")


const getCustomerCollection = async() => {
  const client = await createClient()
  const db = client.db("db3")
  return db.collection("customers")
}

exports.createCustomer = async({name,lastName, address, email}) => {
  const userCollection = await getCustomerCollection()
  const ret = await userCollection.insertOne({name,lastName, address, email})
  return ret.insertedId
}
exports.getAllCustomers = async() => {
  const customerCollection = await getCustomerCollection()
  const ret = await customerCollection.find().toArray()
  return ret
}