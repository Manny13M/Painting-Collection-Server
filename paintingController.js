//paintingController.js
const Painting = require('./Painting');

async function savePainting(req, res) {
    console.log('/save endpoint hit!');

    const painting = new Painting(req.body.params); // Must use params to properly access object
    
    try {
      const newPainting = await painting.save();
      res.status(201).json(newPainting);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}

async function saveAllPaintings(req, res) {
  console.log('/saveAll endpoint hit!'); 

  const paintingsData = req.body.params; // Assuming req.body.params contains an array of paintings data

  try {
      // Insert all paintings data into the database
      const result = await Painting.insertMany(paintingsData);

      // Return the inserted paintings
      res.status(201).json(result);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
}

async function getAllPaintings(req, res) {
  console.log('/getAllPaintings endpoint hit!'); 
  try {
    const paintings = await Painting.find();
    res.json(paintings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getPaintingById(req, res) {
  console.log('/getPaintingById endpoint hit!'); 
  console.log(req.body)
  
    const id = req.params.id;
    try {
      const painting = await Painting.findById(id);
      if (!painting) {
        res.status(404).json({ message: 'Painting not found' });
      } else {
        res.json(painting);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

async function updatePainting(req, res) {
  console.log('/update endpoint hit!');
  
  const id = req.params.id;
  const updateParams = req.body;
  
  try {
    const result = await Painting.updateOne({ _id: id }, { $set: updateParams });
    if (result.nModified === 0) {
      res.status(404).json({ message: 'Painting not found' });
    } else {
      const updatedPainting = await Painting.findById(id);
      res.json(updatedPainting);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletePaintingById(req, res) {
  console.log('/delete endpoint hit!');
  
  const id = req.params.id;
  
  try {
      const result = await Painting.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
          res.status(404).json({ message: 'Painting not found' });
      } else {
          res.json({ message: 'Painting deleted successfully' });
      }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

module.exports = { 
  getAllPaintings, 
  savePainting, 
  saveAllPaintings, 
  getPaintingById, 
  updatePainting,
  deletePaintingById };
