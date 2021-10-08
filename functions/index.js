//import { MongoClient } from 'mongodb'
const functions = require('firebase-functions')
const admin = require('firebase-admin')


const cors = require("cors")
const dotenv =  require('dotenv')
const express = require("express")

const  {ObjectId} = require ('mongodb')
const  {createCustomer, getAllCustomers} = require ('./customers.js')
const  {createShoes} = require ('./shoes.js')
const  {createOrders, getOrder} = require ('./orders.js')
//import { createShoes} from './shoes.js'
//import { createOrders, getOrder} from './orders.js'


admin.initializeApp()
dotenv.config()
const app = express()
//app.use(express.json())
app.use(cors())

app.post("/customers", async (req,res) => {
  try {
  let customer =  await createCustomer(req.body)
  res.status(201).send(customer)
} catch(err) {
  res.status(500).send(err)
}
})
app.post("/shoes",async (req,res) => {
  try {
  let shoes =  await createShoes(req.body)
  res.status(201).send(shoes)
} catch(err) {
  res.status(500).send(err)
}
})

app.post("/orders", async (req,res) => {
  try {
  let order =  await createOrders(req.body)
  res.status(201).send(order)
} catch(err) {
  res.status(500).send(err)
}
})

app.get("/orders/:id", async (req,res) => {
  try {
    let id =  new ObjectId(req.params.id)
    let orderById =  await getOrder(id)
    res.status(201).send(orderById)
  } catch(err) {
    res.status(500).send(err)
  }
})

app.get("/customers", async (req,res) => {
  try {
    let customers =  await getAllCustomers()
    res.status(201).send(customers)
  } catch(err) {
    res.status(500).send(err)
  }
})



//app.listen(3000, () => console.log("Listening"))
exports.app = functions.https.onRequest(app)
