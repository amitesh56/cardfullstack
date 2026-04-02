const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey : process.env.IMAGE_UPLOAD_API
})

async function uploadPost(buffer) {
    const result = imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName : "imagekit.jpg"
    })

    return result;
}

module.exports = uploadPost

