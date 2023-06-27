const { data } = require("../data");

const getMovies = (req, res) => {
  res.send({ status: res.statusCode, message: "Displaying all Movies!", data: data });
};

const addMovie = (req, res) => {
  const baseAdress = req.protocol + "://" + req.headers.host + req.baseUrl;
  const { title } = req.body;
  const { originalname } = req.file;
  const full_address = baseAdress + "/images/" + originalname;

  data.push({
    title: title,
    posterImage: full_address,
  });

  res.send({
    status: res.statusCode,
    message: "Image uploaded successfully!",
    movieUploaded: {
      title: title,
      url: full_address,
    },
  });
};

module.exports = { getMovies, addMovie };
