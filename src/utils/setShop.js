module.exports = (req) => {
  if (!req.session.shop) {
    return true;
  }

  return false;
};
