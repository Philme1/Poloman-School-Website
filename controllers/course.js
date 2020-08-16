
exports.course1 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course1", {info: `School of ${info}`});
}

exports.course2 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course2", {info: `School of ${info}`});
}

exports.course3 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course3", {info: `College of ${info} Innovation`});
}

exports.course4 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course4", {info: `College of ${info} Innovation`});
}

exports.course5 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course5", {info: `${info}`});
}

exports.course6 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course6", {info: `${info}`});
}

exports.course7 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course7", {info: `OND in ${info} & Mining Tech Mgt`});
}

exports.course8 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course8", {info: `${info} in Port Logistics & Mining Technology Management`});
}

exports.course9 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course9", {info: `HND in ${info} & Event Business Management`});
}

exports.course10 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course10", {info: `Executive ${info} Diploma`});
}

exports.course11 = (req, res) => {
  let info = req.originalUrl.split("/")[2]
  res.render("courses/course11", {info: `Executive Master in Port ${info} management`});
}

