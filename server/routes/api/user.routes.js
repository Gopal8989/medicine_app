var multer = require("multer");

module.exports =function(app){
    const user = require('../../controller/user.controller');
    // let middleware = require("../../controller/middleware/token.verify.middleware");
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null,'./public/assets/image')
        },
        filename: function (req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now())
        }
      })
       
      var upload = multer({ storage: storage })
    // app.post('/api/user',upload.single("file"), user.create);
    app.post('/api/user',user.create);
    
    app.get('/api/users',user.findAll);
    app.get('/api/users/:id',user.findById);
    app.put('/api/userupdate/:id',user.update);
    app.delete('/api/users/:id',user.delete);
    app.post('/api/login',user.login);

    // const medicine = require('../../controller/medicine.controller');
    //medicine api
    // app.post('/api/medicine',medicine.createe);
    // app.get('/api/medicines',medicine.findAll);
    // app.get('/api/medicines/:id',medicine.findById);
    // app.put('/api/medicineupdate/:id',medicine.update);
    // app.delete('/api/medicines/:id',medicine.delete);
   
}