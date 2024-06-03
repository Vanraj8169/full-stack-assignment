const Product = require('./../model/dataModel');

exports.getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);
    const total = await Product.countDocuments();

    res.status(200).json({
      status: 'success',
      results: products.length,
      total,
      data: products
    });
  } catch (err) {
    next(err);
  }
};
