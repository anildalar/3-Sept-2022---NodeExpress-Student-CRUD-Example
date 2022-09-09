const express = require('express');
const { studentController } = require('../controllers/studentController');

const studentRoute = express.Router();

studentRoute.post('/student',studentController);

//Named Export

module.exports = { studentRoute }