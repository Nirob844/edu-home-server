const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/allCoursesData.json');
const singleCourse = require('./data/courseDetials.json');

app.get('/', (req, res) => {
    res.send(' API Running on server');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = singleCourse?.find(c => c.id == id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('EduHome Server running on port', port);
})