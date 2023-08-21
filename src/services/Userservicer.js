import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8061/user";

class Userservicer {

    getAllUsers() {
        console.log("Userservice. getAllUsers()");
        return axios.get(`${EMPLOYEE_API_BASE_URL}/getAll`);
    }

    createUser(user) {
        console.log("Userservice. createUser()");
        return axios.post(`${EMPLOYEE_API_BASE_URL}/saveUsers`, user);
    }

    getUserById(id) {
        console.log("Userservice. getUserById()");
        // return axios.get(`${EMPLOYEE_API_BASE_URL}/user`+ id);
        return axios.get(`${EMPLOYEE_API_BASE_URL}/getById/${id}`);

    }

    updateUser(user, id) {
        console.log("Userservice. updateUser()");
        // return axios.put(`${EMPLOYEE_API_BASE_URL}/users` + id, user);
        return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${id}`, user);

    }

    deleteUser(id) {
        console.log("Userservice. deleteUser()");
        // return axios.delete(`${EMPLOYEE_API_BASE_URL}/employees` + id);
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${id}`);
    }
}

export default new Userservicer()
