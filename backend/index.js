const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const bodyParser=require("body-parser")
const mongoose=require("mongoose");


const app=express()

dotenv.config()


app.use(cors())
app.use(bodyParser.json())

const { Schema } = mongoose;

const userSchema = Schema({

    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }

});

const Users = mongoose.model("users", userSchema)


// Get All user

app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(404).json({ message: err })
        }
    })
})

// Get user By id 


app.get("/users/:id", (req, res) => {

    const { id } = req.params
    Users.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            }

        } else {
            res.status(404).json({ message: err })
        }
    })

})

// Delete user by Id


app.delete("/users/:id", (req, res) => {

    const { id } = req.params

    Users.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send("Succesfully deleted")
        }
        else {
            res.status(404).json({ message: err })
        }
    })

});

// Add user


app.post("/users", (req, res) => {


    let user = new Users({

        imageUrl: req.body.imageUrl,
        title: req.body.title,
        description: req.body.description

    })
    user.save();

    res.send({ message: " Succesfully added" })

})

app.get("/",(req,res)=>{
    res.send("<h1>Admin PAnel</h1>")
})


const PORT=process.env.PORT

const url=process.env.URL.replace("<password>",process.env.PASSWORD)
mongoose.set('strictQuery', true);

mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connected");
        app.listen(PORT,()=>{
            console.log("Server start");
        })
    }
})