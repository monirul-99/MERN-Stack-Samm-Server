module.exports.getResume = (req, res, next) => {
  res.download(__dirname + "/Monirul_Islam_Resume.pdf");
};
