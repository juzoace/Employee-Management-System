const router = require('express').Router();
const { createDepartment } = require("../controller/department");

// Create Department
// Swagger Definition
router.post('/createDepartment', createDepartment);


module.exports = router;