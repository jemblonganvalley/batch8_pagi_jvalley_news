//import package yang dibutuhkan
const express = require("express");
const hbs = require("express-handlebars");
const cors = require("cors");
const path = require("path");
const app = express();

//import route dari folder routes
const home = require("./routes/home_routes");

//middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//setup view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine(
  "html",
  hbs({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/components"),
    defaultLayout: "main_layout.html",
    extname: "html",
  })
);

//pergunakan routing yang sudah dibuat
app.use("/", home);

//jalankan servernya
app.listen(3000, () => console.log("server berjalan di port 3000"));
