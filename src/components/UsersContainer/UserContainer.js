import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {UserForm} from "./UserForm";
import {Users} from "./Users";

const UserContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div style={{width: '45%'}}>
            <h2>Users</h2>
            <UserForm setUsers={setUsers}/>
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};