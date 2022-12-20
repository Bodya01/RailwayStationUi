import { useState } from "react";
import RideCard from "./RideCard/RideCard.jsx"


const RideList = (props) => {
    const [rides, setRides] = useState(props.rides)

    return(
        <div className="d-flex" style={{width: '80%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            {rides.map((r, id) => (
                <RideCard key={id} ride={r}/>
            ))}
        </div>
    )
}

export default RideList;