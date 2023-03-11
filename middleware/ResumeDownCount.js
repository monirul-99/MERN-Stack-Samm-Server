let count = 0;
const viewCount = (req, res, next) => {
  count++;
  console.log("Count: ", count);
  next();
};

module.exports = viewCount;
