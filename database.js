const mongoose = require('mongoose');

function connectToDatabase() {
    const DataBase = 'mongodb://localhost:27017/paintingCollection';
  
    mongoose.connect(DataBase);

    const db = mongoose.connection;
  
    db.on('error', (err) => { console.log(err); });
  
    db.once('open', () => {
        // Code to be executed once the connection is open
    
        console.log('Connected to MongoDB');
    });
}

module.exports = { connectToDatabase };