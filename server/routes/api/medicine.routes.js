
module.exports =function(app){

    const medicine = require('../../controller/medicine.controller');
    //medicine api
    app.post('/api/medicine',medicine.create);
    app.get('/api/medicines',medicine.findAll);
    app.post('/api/medicines/:id',medicine.findById);
    app.put('/api/medicineupdate/:id',medicine.update);
    app.delete('/api/medicines/:id',medicine.delete);
   
}