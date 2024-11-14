const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());

app.get('/', (req, res) => {
    res.send(`<form action="http://localhost:5000/upload" method="post" encType="multipart/form-data">
        <input type="file" name="sampleFile" multiple />
        <input type="submit" value="upload" />
    </form>`)
})
app.post('/upload', function (req, res) {
    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/assets/' + sampleFile.name;
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);
        res.send('File uploaded!');
    });
});

app.listen(5000)