const prisma = require("../database/db");
module.exports = async (req, res, next) => {
  if (!req.session.user) {
    next();
  }
  try {
    const shop_data = await prisma.shop.findFirst({
      where: {
        ketersediaan: true,
        id_user: req.session.user.id_user,
      },
    });

    if (shop_data === null) {
      next();
    }

    req.session.shop = shop_data;
    req.session.save();
    next();
  } catch (error) {
    console.log("========= checkShopUtilError =========\n", error);
    next();
  }
};
