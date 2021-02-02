module.exports = function (app) {
    const appointment = require("../../controller/appointment.controller");
    //medicine api
    app.post("/api/appointment", appointment.create);
    app.get("/api/appointments", appointment.findAll);
    app.post("/api/appointments/:id", appointment.findById);
    app.put("/api/appointmentupdate/:id", appointment.update);
    app.delete("/api/appointments/:id", appointment.delete);
  };
  