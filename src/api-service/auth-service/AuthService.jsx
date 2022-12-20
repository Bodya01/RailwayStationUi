import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getAuthenticationUrl();

const AuthService = {

    register: async (model) => APIService.post(route + "register", model),

    login: async (model) => APIService.post(route + "login", model),

    refresh: async (model) => APIService.post(route + "refresh", model)
};

export default AuthService