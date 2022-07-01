import axios from 'axios';

const baseUrl = "http://20.124.158.6/api/Student/";

export const StudentServices = {
    getAllStudents,     
    getStudentById,    
    createStudent,
    updateStudent,
    deleteStudent
};


function getAllStudents(){  
    return axios.get("http://20.124.158.6/api/Students/GetStudents");
    
}

function getStudentById(id){
    return axios.get(baseUrl+"GetStudent/" + id);
}

function createStudent(StudentObj){
    return axios.post("http://20.124.158.6/api/Students/CreateStudent");
}


function updateStudent(StudentObj){
    
    return axios.put(baseUrl +"UpdateStudent", StudentObj);
}

function deleteStudent(id){
    return axios.delete("http://20.124.158.6/api/Students/DeleteStudent/" + id);
}

export default StudentServices;
