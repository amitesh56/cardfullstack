const express = require("express");
const multer = require("multer")
const uploadPost = require("./services/storage.service")
const postModel = require("./models/image.model")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())

const upload = multer({storage:multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async (req,res)=>{
    const buffer = req.file.buffer;
    const caption = req.body.caption;
    const result = await uploadPost(buffer)
    const post = await postModel.create({
        image_url : result.url,
        caption : caption
    })
    res.status(201).json({
        message : " image is uploaded successfully",
       
    })
})

app.get("/posts", async (req,res) => {

     const posts = await postModel.find();

    res.status(200).json({
        message : "image fetched success fully",
        posts
    })
})


module.exports = app;