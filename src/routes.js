const express = require("express");
const routes = express.Router();

const cursosControllers = require('./controllers/courseControllers')

routes.get("/cursos", cursosControllers.returnCourses)
routes.get("/cursos/:index", cursosControllers.returnCourse)
routes.post("/cursos", cursosControllers.createCourse)
routes.put("/cursos/:index", cursosControllers.updateCourse)
routes.delete("/cursos/:index", cursosControllers.deleteCourse)

module.exports = routes;