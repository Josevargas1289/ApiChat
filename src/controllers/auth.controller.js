const UserServices = require("../services/users_services")
const bcrypt = require("bcrypt");



const userLogin = async (req, res, next) =>{
    try {
      const { email, password, } = req.body
      const user = await UserServices.getUser(email);

      if (!user) {
        return next({
            status: 400,
            message: "Invalid email",
            error: "User not found",
          });
      }
      const isvalid = await bcrypt.compare(password, user.password)
      if (!isvalid) {
        return next({
            status: 400,
            message: "The password doesn't match with email user",
            error: "Invalid password",
          });
        
      }
      res.json({
        email: user.email,
        userName: user.userName,
        firstName : user.firstName,
        lastName : user.lastName

      })
    } catch (error) {
        res.status(400).json(error)
   
        
    }
}
module.exports = {
    userLogin,
}