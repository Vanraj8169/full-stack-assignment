const data = require("./../model/postModel");

exports.import = async (req, res) => {
  const newData = await data.create({
    name: req.body.name,
    imageSrc: req.body.imageSrc,
    imageAlt: req.body.imageAlt,
    price: req.body.price,
    color: req.body.color,
  });
};
f