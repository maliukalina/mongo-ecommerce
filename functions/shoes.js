const {createClient} = require ("./shoestore.js")

const getShoesCollection = async() => {
  const client = await createClient()
  const db = client.db("db3")
  return db.collection("shoes")
}
exports.createShoes = async({type,color, size, price}) => {
  const shoesCollection = await getShoesCollection()
  const ret = await shoesCollection.insertOne({type,color, size, price})
  return ret.insertedId
}