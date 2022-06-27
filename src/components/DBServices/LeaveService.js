import axios from 'axios';

const baseUrl = "https://localhost:44381/api/Leaves/api/Leaves/GetLeaves";

export const LeaveService = {
    getAllLeaves,     
    getLeaveById,    
    createLeave,
    updateLeave,
    deleteLeave
};


function getAllLeaves(){  
    return axios.get(baseUrl +"GetLeaves/");
    
}

function getLeaveById(id){
    return axios.get(baseUrl+"GetLeave/{id}" + id);
}

function createLeave(LeaveObj){
    
    return axios.post(baseUrl+"CreateLeave/", LeaveObj);

}
function updateLeave(LeaveObj){
    return axios.put(baseUrl +"UpdateLeave", LeaveObj);
}

function deleteLeave(id){
    return axios.delete(baseUrl +"DeleteLeave"+ id);
}

export default LeaveService;
