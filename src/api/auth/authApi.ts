// import { ADMIN_MODEL, USER_MODEL } from "../../models/user.model";
import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";
import { IReqSignIn } from "./auth.interface";
import { IResLogin } from "./auth.type";

const authApi = {
  login(data: IReqSignIn): Promise<ReturnReponse<IResLogin>> {
    const url = "default/login"; //params
    return axiosClient.post(url, data);
  },
  signup(data: IReqSignIn): Promise<ReturnReponse<IResLogin>> {
    const url = "default/login"; //params
    return axiosClient.post(url, data);
  },
};

export default authApi;
