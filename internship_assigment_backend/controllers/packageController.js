const Package = require('../models/Package');

exports.getTopSellingPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
