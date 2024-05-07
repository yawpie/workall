const path = require("path");

module.exports = (filename) => {
  result = path.join(__dirname, "/public", filename);
  return result;
};
