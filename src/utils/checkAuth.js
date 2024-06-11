module.exports = (req, res, next) => {
  if (req.session.user && req.session.authenticated) {
    next();
  } else {
    res.redirect("/register");
  }
};
