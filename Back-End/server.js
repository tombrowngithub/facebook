const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const facebookModel = require('./model/FacebookModel')


const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//connect to mongoos
mongoose.connect('mongodb+srv://Tombrown:1234567890@cluster0.xdsexex.mongodb.net/Facebook?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("DB connected")).catch(err => console.log(err))

//CREATE
app.post('/login', (req, res) => {
    const user_name = req.body.user_name
    const password = req.body.password

    const newModel = new facebookModel({
        user_name, password
    })

    newModel.save((err, data) => {
        if (err) {
            console.log(err)
        }
        res.send('created!')
    })

    console.log(newModel)
})

//READ
app.get('/read', (req, res) => {
    facebookModel.find({}, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

// //UPDATE
// app.put('/update/:id', async (req, res) => {
//     req.data = await Note.findByIdAndUpdate(req.params.id)
//     let data = req.data
//     data.title = req.body.title
//     data.note = req.body.note
//
//     try {
//         await data.save()
//         res.send("updated")
//     } catch (e) {
//         console.log(e)
//     }
// })

//DELETE
// app.delete('/deleteNote/:id', (req, res) => {
//     Note.deleteOne({_id: req.params.id}, function (err) {
//         if (err) {
//             console.log(err)
//         }
//         res.send("Deleted")
//     })
// })

app.listen(PORT, () => {
    console.log("server started at port ", PORT)
})