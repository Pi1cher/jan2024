import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";
import css from "./UserForm.module.css";

const UserForm = ({setUsers}) => {

    const {reset, register, handleSubmit} = useForm();

    const saveForm = (item) => {
      userService.create(item).then(({data}) => setUsers(prev=>[...prev, data]))
    }
    return (
        <form className={css.UserForm} onSubmit={handleSubmit(saveForm)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'phone'} {...register('phone')}/>
            <button>Save</button>
        </form>
    );
};

export {UserForm};