const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []
function checkIfUserAlreadyExists(req) {
    for (i = 0; i < users.length; i++) {
        if(users[i].userName.includes(req.body.userName)) {
            return true
        } else {
            return false
        }
    }
}

sameUserNameError = {
    Error: "Username is already taken!"
}

function randomId() {
   let randomNumb = Math.floor(Math.random()*1000)
   return randomNumb
}

app.post("/api/user", function(req,res) {
    if (checkIfUserAlreadyExists(req) === true) {
        console.log("Username Already Exists")
        res.status(409)
        res.send(sameUserNameError)
    } else {
    req.body.id = randomId()
    users.push(req.body)
    res.status(201)
    res.send(req.body)
    }
})

app.listen(3000);
