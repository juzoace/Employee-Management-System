const router = require('express').Router();
const { createEmployee, updateEmployee, getEmployees, deleteEmployee} = require("../controller/employee");


// Swagger Definitions

// Create Employee
/**
 * @
 * 
 * 
 */
router.post('/createEmployee', createEmployee);

// Update Employee
// Swagger Definition
router.put('/updateEmployee', updateEmployee);

// Get Employees
// Swagger Definition
router.get('/getEmployees', getEmployees);

// Delete Employee
// Swagger Definition
router.delete('/deleteEmployee', deleteEmployee);

module.exports = router;