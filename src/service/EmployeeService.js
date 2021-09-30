
import AxiosService from './AxiosService';
import axios from 'axios';
const baseUrl="localhost:9090/employeepayrollservice"
class EmployeeService
{
    

    addEmployee(data) {
        console.log(data)
        // var baseUrl='http://localhost:9090/emp/create'
        return AxiosService.postService(`${baseUrl}`, data)
    }
    getAllEmployee() {
       // return AxiosService.getAllEmployeeService( `${this.baseUrl}/get`)
       return axios.get(`${this.baseUrl}/get`)
    } 

    updateEmployee(data) {
        return AxiosService.updateEmployeeService(`${this.baseUrl}/update/${data.employeeId}`, data)
    }

    removeEmployee(id) {
        return AxiosService.removeEmployeeService(`${this.baseUrl}/delete/${id}`)
    }
}

export default new EmployeeService;