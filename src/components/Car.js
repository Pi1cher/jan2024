import {carService} from "../services/carService";

const Car = ({car, setCarForUpdate, setTrigger}) => {

    const {id, brand, price, year} = car;

    const carDelete = async (id) => {
        await carService.deleteById(id)
        setTrigger(prev => !prev)
    }

    return (
        <div>

            <hr/>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={() => carDelete(id)}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};