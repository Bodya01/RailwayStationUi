import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getTicketUrl();

const TicketService = {
    buyTicket: async (rideId, wagonId, seatId) => APIService.post(route + "buy", {rideId, wagonId, seatId})
}