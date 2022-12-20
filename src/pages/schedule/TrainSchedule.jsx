import RideSearch from "../../components/RideSearch/RideSearch"
import RideList from "../../components/RideList/RideList"
import s from "./TrainSchedule.module.css"

const TrainSchedule = () => {
    const a = ["asd", "zxc"]
    return(
        <div className={s.search_container}>
            <div className="w-100 d-flex justify-content-center">
                <RideSearch/>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <RideList rides={a}/>
            </div>
        </div>
    )
}

export default TrainSchedule