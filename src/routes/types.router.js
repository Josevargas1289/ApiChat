const { Router } = require("express")
const {createTypes, getAllTypes} = require("../controllers/type.controller")


const router = Router();
router.post('/api/v1/types', createTypes);
router.get('/api/v1/types', getAllTypes);  


module.exports = router;