const router = require('express').Router();
const { Category, Product } = require('../../models');
const { restore } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/',  async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
  const catData = await Category.findAll({ 
    include: [{ model: Product }],
  })
  res.status(200).json(catData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const catData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    })
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try{
    const catData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err)
  }
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
 
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
