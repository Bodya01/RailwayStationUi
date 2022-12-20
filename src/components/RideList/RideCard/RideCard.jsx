import { useEffect, useState } from "react";
import s from './RideCart.module.css'

const RideCard = (props) => {
    const [ride, setRide] = useState({})

    useEffect(() => {
        setRide({
            rideName: 'Lviv - Kyiv',
            rideType: 'Intercity',
            lastStationName: 'Kyiv',
            firstStationName: 'Lviv',
            rideDuration: '7:33',
            rideDepartmentTime: '00:24',
            rideArrivalTime: '07:57',
            tickets: [
                { name: 'Cupe', amount: 5 },
                { name: 'Luxe', amount: 1 },
                { name: 'Reserved Seats', amount: 13 }
            ]
        })
    }, [])

    return (
        <div className={s.ride_card_container}>
            <div className={s.ride_card_container_inner}>
                <div className={s.ride_info_container}>
                    <div className={s.train_route_info}>
                        <span className={s.train_type_container}>{ride.rideType}</span>
                        <span className={s.ride_name_container}>{ride.rideName}</span>
                        <button className="btn btn-md btn-warning">Ride route</button>
                    </div>
                    <div className={s.time_info}>
                        <div className={s.time_info_item}>
                            <span>{ride.rideDepartmentTime}</span>
                            <span>-</span>
                            <span>{ride.rideArrivalTime}</span>
                        </div>
                    </div>
                    <div className={s.ticket_info}>
                        {
                            ride.tickets?.map((seat) => (
                                <div className={s.ticket_info_item}>
                                    <span>{seat.name}: </span>
                                    <span>{seat.amount}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={s.button_container}>
                    <button className="btn btn-sm btn-outline-info">Buy Ticket</button>
                </div>
            </div>
        </div>
    )
}

export default RideCard;