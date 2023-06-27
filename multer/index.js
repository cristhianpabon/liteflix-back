const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images");
  },
  filename: (req, file, cb) => {
    // console.log("file: ", file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.upload = upload.single("image");
