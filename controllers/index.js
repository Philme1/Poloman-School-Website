

exports.index = (req, res) => {
  res.render("index");
}

exports.about = (req, res) => {
  let info = req.originalUrl.split("/")[1]
  res.render("about.ejs", {info: `${info} US`});
}

exports.academics = (req, res) => {
  let info = req.originalUrl.split("/")[1]
  res.render("academics", {info: info} );
}

exports.contact = (req, res) => {
  let info = req.originalUrl.split("/")[1]
  res.render("contact.ejs", {info: `${info} US`});
}

exports.apply = (req, res) => {
  let info = req.originalUrl.split("/")[1]
  res.render("apply.ejs", {info: `${info} HERE`});
}