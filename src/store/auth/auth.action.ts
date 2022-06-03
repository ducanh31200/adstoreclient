import { State } from ".";
import { IReqSignIn } from "../../api/auth/auth.interface";
import authApi from "../../api/auth/authApi";

import { saveToLocalStorage } from "../../helper/base.helpers";
import { notifyError, notifySuccess } from "../../utils/notify";

type Actions = { setState: any; getState: () => State; dispatch: any };

export const loginAsync =
  (payload: IReqSignIn) =>
  async ({ setState, getState }: Actions) => {
    const result = await authApi.login(payload);

    console.log("res", result);
    console.log("res.data", result.data.accessToken);
    if (result.status === 200) {
      saveToLocalStorage("token", result.data.accessToken);

      setState({ ...getState(), isLoggedIn: true });
      return true;
    }
    return false;
  };
export const getUserAsync =
  () =>
  async ({ setState, getState }: Actions) => {
    // const result = await authApi.getUser();
    // // console.log("123", result);
    // if (result.status === 200) {
    //   setState({ ...getState(), auth: result.data });
    //   return true;
    // }
    // return false;
    setState({ ...getState(), isLoggedIn: true });
    return true;
  };
export const logoutAsync =
  () =>
  ({ setState, getState }: Actions) => {
    localStorage.removeItem("token");
    setState({ ...getState(), isLoggedIn: false });
  };
