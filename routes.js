//routes.js
const { Router } = require('express');
const { 
    getAllPaintings, 
    savePainting, 
    saveAllPaintings, 
    getPaintingById, 
    updatePainting,
    deletePaintingById } = require('./paintingController');

const router = Router();

router.get('/get/:id', getPaintingById);
router.get('/getAll', getAllPaintings);

router.post('/save', savePainting);
router.post('/saveAll', saveAllPaintings);

router.put('/update/:id', updatePainting);

router.delete('/delete/:id', deletePaintingById);

function setupRoutes(app) {
    app.use('/paintings', router);
}

module.exports = { setupRoutes };