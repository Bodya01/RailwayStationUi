import APIConfig from "./APIConfig";

const APIRoutes = {

    getAuthenticationUrl: () => APIConfig.URL,

    getTicketUrl: () => APIConfig.URL + "ticket/",
    
    getStationUrl: () => APIConfig.URL + "station/"

}

export default APIRoutes;