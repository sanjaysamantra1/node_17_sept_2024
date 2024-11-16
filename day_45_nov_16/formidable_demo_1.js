const express = require('express');
const fs = require('fs');
const {formidable} = require('formidable');
const app = express();

const a = 10;
const b = 20;
console.log(`addition of ${ a } and ${ b } is ${ a + b}`);
console.log(a===b);

const x = 40;
console.log(x);

function f1(a, b, c, d) {
  console.log(a, b, c);
}
f1(1, 2, 3, 4);

app.get('/', (req, res) => {
  res.send(`
        <h2>With Node.js <code>"http"</code> module</h2>
        <form action="/upload" enctype="multipart/form-data" method="post">
          <div>Text field title: <input type="text" name="title" /></div>
          <div>File: <input type="file" name="myFiles" multiple="multiple" />
          </div>
          <input type="submit" value="Upload" />
        </form>
      `);
});
app.post('/upload', async (req, res) => {
  const options = {
    maxFileSize: 1024 * 5, // max 5 kb
    filter: function({mimetype}) {
      return mimetype && mimetype.includes('image');
    },
  };
    // const formidableObj = formidable({});
  const formidableObj = formidable(options);
  try {
    const [, files] = await formidableObj.parse(req);
    for (const fileObj of files.myFiles) {
      const oldPath = fileObj.filepath;
      const newPath = `${__dirname}/assets/${fileObj.originalFilename}`;
      const imageFile = fs.readFileSync(oldPath);
      fs.writeFileSync(newPath, imageFile);
    }
    res.send('File Uploaded Succesfully...');
  } catch (err) {
    res.send('Please upload only image files with size <= 5kb');
  }
});

app.listen(5000, () => {
  console.log('server running at 5000');
});
