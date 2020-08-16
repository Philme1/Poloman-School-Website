if(process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayout);
app.use(express.static("public/"));
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/index"));
app.use("/courseDetail", require("./routes/course"));


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));




{/* <div class="google-form">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeyR_nod5pe7Q9XdMLc6QzBTolFwMeOpRJufqogSQp_d1H_AQ/viewform?embedded=true" width="700" height="520" frameborder="0" scrolling="auto" marginheight="0" marginwidth="0">Apply Now</iframe>
  </div> */}