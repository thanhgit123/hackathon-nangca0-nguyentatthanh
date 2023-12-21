const { getUserByEmail } = require("../repository/repository");
const jwt = require("jsonwebtoken");
require("dotenv").config();
async function login(req, res) {
    console.log(req.body);
    const {email, password} = req.body;
    const result = await getUserByEmail(email);
    if(!result){
        return res.status(404).json({message:"Email không hợp lệ"});
    }
    if(result.password != password){
        return res.status(400).json({message:"mật khẩu không đúng"}); 
    }
    
    const token = jwt.sign({id:result.id, role : result.role}, process.env.JWT_SECRET);
    return res.status(200).json({message:"okela",token});
}
module.exports = {
    login
}