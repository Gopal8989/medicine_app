module.exports = function (app) {
    const hospital = require("../../controller/hospital.controller");
    //hospital api
    app.post("/api/hospital", hospital.create);
    app.get("/api/hospitals", hospital.findAll);
    app.post("/api/hospitals/:id", hospital.findById);
    app.put("/api/hospitalupdate/:id", hospital.update);
    app.delete("/api/hospitals/:id", hospital.delete);
  };
  