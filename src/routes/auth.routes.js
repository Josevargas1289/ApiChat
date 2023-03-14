const Router = require("express");
const { userLogin } = require("../controllers/auth.controller");
const { LoginUserValidator } = require("../validators/login.validators")

const router = Router();

router.post("/api/v1/auth/login", LoginUserValidator, userLogin);

module.exports = router;