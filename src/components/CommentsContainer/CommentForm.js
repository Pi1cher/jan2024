import {useForm} from "react-hook-form";
import {commentService} from "../../services/commentService";
import css from "./CommentForm.module.css"

const CommentForm = ({setComments}) => {

    const {reset, register, handleSubmit} = useForm();

    const saveForm = (item) => {
      commentService.create(item).then(({data})=>setComments(prev=>[...prev.slice(1), data]))
    }

    return (
        <form className={css.CommentForm} onSubmit={handleSubmit(saveForm)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Comment</button>
        </form>
    );
};

export {CommentForm};