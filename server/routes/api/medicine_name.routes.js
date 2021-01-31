module.exports =function(app){

    const medicine = require('../../controller/medicine_name.controller');
    //medicine api
    app.post('/api/medicinesname',medicine.create);
    app.get('/api/medicinesname',medicine.findAll);
    app.post('/api/medicinesname/:id',medicine.findById);
    app.put('/api/medicinesnameupdate/:id',medicine.update);
    app.delete('/api/medicinesname/:id',medicine.delete);


}