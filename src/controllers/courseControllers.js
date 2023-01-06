const course = require('../db/db')

module.exports = {
    //retornar um curso
    returnCourse(req, res) {
        const { index } = req.params;
        return res.json(course[index]) 
    },
    //retornar todos os cursos
    returnCourses(req, res)  {
        return res.json(course)
    },
    //criar um novo curso
    createCourse(req, res) {
        const { name } = req.body
        course.push(name)
        return res.json(course)
    },
    //atualizar curso
    updateCourse(req, res) {
        const { index } = req.params
        const { name } = req.body

        course[index] = name
        return res.json(course)
    },
    //deletar curso
    deleteCourse (req, res) {
        const { index } = req.params;
        course.splice(index, 1);
        return res.json({ message: "O curso foi deletado" });
    },
}