const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')

const { firebase } = require("./configFirebase")

const app = express()
app.use(cors({
    origin: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/login', async (req, res) => {
    const data = req.body

    const Token = []
    const response = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)

    const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)

    if (response.user.uid) { res.status(200).json({ token: token }) }
    else { res.status(401).json({ message: "Authenticaded Invalid" }) }
})

exports.v1 = functions.https.onRequest(app);