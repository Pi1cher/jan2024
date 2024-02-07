import {useEffect, useState} from "react";
import {launchService} from "../../../services/launchService";
import {Launch} from "../Launch/Launch";
import css from "./Launches.module.css"
const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll().then(({data}) => {
            setLaunches(data.filter(value=>value.launch_year !== '2020'));
        })
    }, [])


    return (
        <div className={css.Launches}>
            <h1>Launches</h1>
            <br/>
            {launches.map(launch=> <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};


export {Launches};