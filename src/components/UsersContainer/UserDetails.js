import {Outlet, useLoaderData, useNavigate} from "react-router-dom";

const UserDetails = () => {
    const {data} = useLoaderData();
    const navigate = useNavigate();

    const {id, name, email, phone, website} = data;


    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <button onClick={()=> navigate('posts', {state: {userId:id}}) }>Posts of current user</button>
            <button onClick={ () => navigate('/users')}>Back</button>
            <Outlet/>
        </div>
    );
};

export {UserDetails};