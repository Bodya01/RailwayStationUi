import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getStationUrl();

const StationService = {
    getAllStations: () => APIService.get(route + "all")
}

export default StationService;