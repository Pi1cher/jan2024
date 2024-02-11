import {useEffect, useState} from "react";

import {apiService} from "../services/apiService";
import {carService} from "../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);


    useEffect(() => {
        carService.getAll().then(({data}) => {
            setCars(data.slice( () =>{
                if (data.length < 5){
                    return 0;
                }
                else {
                    return (data.length - 5)
                }
            }))
        })
    }, [trigger])


    return (
        <div style={{width: '50%'}}>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsContainer};