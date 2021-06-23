const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: true
}))
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    const obj = {
        mensage: 'firebase functions executado com suuccess'
    }
    console.log(obj)
    return res.send(obj)
})

exports.api = functions.https.onRequest(app);