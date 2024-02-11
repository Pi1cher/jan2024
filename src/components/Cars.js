import {Car} from "./Car";

const Cars = ({cars, setCarForUpdate, setTrigger}) => {

    return (
        <div>
            <h2>Last 5 cars:</h2>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}  setTrigger={setTrigger}/>)}
        </div>
    );
};

export {Cars};