module.exports =function(app){
    const user = require('../../controller/forget.controller');
  
    app.get("/api/verify/:id",user.verify);
    app.post("/api/forgate/:id",user.forgate);
    app.post("/api/otp/:id", user.otp);
    app.post("/api/changepass", user.changepass);
  
    
}