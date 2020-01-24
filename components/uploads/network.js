
const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');


// @route GET single /item
// @desc Get All Items
// @access Public



router.post('/', (req, res)=>{
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});








module.exports = router;

