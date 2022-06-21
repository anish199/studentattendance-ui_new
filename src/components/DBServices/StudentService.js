import axios from 'axios';

const baseUrl = "https://localhost:44381/api/Student/";

export const EmployeeServices = {
    getAllStudents,     
    getStudentById,    
    createStudent,
    updateStudent,
    deleteStudent
};


function getAllStudents(){  
    return axios.get(baseUrl +"GetStudents/");
    
}

function getStudentById(id){
    return axios.get(baseUrl+"GetStudent/" + id);
}

function createStudent(StudentObj){
    return axios.post(baseUrl +"CreateStudent/", StudentObj);
}


function updateStudent(StudentObj){
    
    return axios.put(baseUrl +"UpdateStudent", StudentObj);
}

function deleteStudent(id){
    return axios.delete(baseUrl +"DeleteStudent/"+ id);
}

export default EmployeeServices;
