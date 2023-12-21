const { login } = require("../controllers/login.controller")

const loginRouter = (app)=>{
    app.post('/login',login)
}
module.exports = {
    loginRouter
}