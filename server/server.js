const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const {uploadFile, getFileStream} = require('./utils/s3')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

// aws=====
// app.get('/s3Url', async (req, res) => {
//   const url = await generateUploadURL()
//   res.send({url})
// })

app.get('/images/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

app.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log("file: "+file)

  // apply filter
  // resize 

  const result = await uploadFile(file)
  await unlinkFile(file.path)
  console.log(result)
  res.send({imagePath: `/images/${result.Key}`})
})

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});