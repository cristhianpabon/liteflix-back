const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes");

const app = express();
const port = 8080;
const corsOptions = {
  origin: "*",
  credential: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/health", (req, res) => {
  const original_full_address = req.protocol + "://" + req.headers.host + req.originalUrl;
  const full_address = req.protocol + "://" + req.headers.host + req.baseUrl;
  res.send({
    status: res.statusCode,
    message: "All Okay!",
    baseUrl_original: full_address,
  });
});

app.use("/images", express.static("assets/images"));

app.use("/", indexRouter);

app.listen(port, () =>
  console.log(`liteflix-back:: listening at http://localhost:${port}`)
);
