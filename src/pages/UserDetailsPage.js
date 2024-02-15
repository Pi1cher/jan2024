import {useLoaderData} from "react-router-dom";
import {UserDetails} from "../components/UsersContainer/UserDetails";
import {userService} from "../services/userService";

const UserDetailsPage = () => {



    return (
        <div>
            <UserDetails/>
        </div>
    );
}

export {UserDetailsPage};