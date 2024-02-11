import {useForm} from "react-hook-form";

import css from "./CarForm.module.css"
import {carService} from "../services/carService";
import {useEffect} from "react";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {

    const {reset, register, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all'
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])


    const handleForm = (car) => {
        if (carForUpdate) {
            return update(car);
        } else {
            return saveForm(car)
        }

    }
    const saveForm = async (car) => {
        await carService.create(car)
        setTrigger(prev => !prev)
        reset()
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev => !prev)
        carForUpdate = null
        reset()
    }

    return (
        <form className={css.CarForm} onSubmit={handleSubmit(handleForm)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Brand: no numbers, 1-20 characters'
                }
            })}/>
            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'min 0'},
                max: {value: 1000000, message: 'max 1000000'},
            })}/>
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: 'min 1990'},
                max: {value: new Date().getFullYear(), message: 'max: current year'}
            })}/>
            <button disabled={!isValid}>Save</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}

        </form>
    );
};

export {CarForm};