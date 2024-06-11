const prisma = require("../database/db");
module.exports = async (req, res, next) => {
  if (!req.session.user) {
    next();
  }
  try {
    const shop_data = await prisma.shop.findUnique({
      where: {
        ketersediaan: true,
        id_user: req.session.user.id_user,
      },
    });

    if (!shop_data) {
      next();
    }
    req.session.shop = shop_data;
    req.session.save();
    next();
  } catch (error) {
    console.log(error);
  }
};
