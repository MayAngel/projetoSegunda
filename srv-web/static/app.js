const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('www'));

// Recursos de upload.
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, arquivo, callback) {
    callback(null, 'www/img/');
  },
  filename: function (req, arquivo, callback) {
    callback(null, arquivo.originalname);
  }
})
const upload = multer({ storage: storage });

app.post("/upload", upload.single('arquivo'), (req, res) => {
  res.status(200).send();
})

const msg = `Servidor rodando na porta: ${PORT}`;
app.listen(PORT, () => console.log(msg));