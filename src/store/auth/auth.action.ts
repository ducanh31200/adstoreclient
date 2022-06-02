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

    if (result.status === 200) {
      saveToLocalStorage("token", result.data.accessToken);
      setState({ ...getState(), isLoggedIn: true });
      return true;
    }
    return false;
  };

export const logoutAsync =
  () =>
  ({ setState, getState }: Actions) => {
    localStorage.removeItem("token");
    setState({ ...getState(), isLoggedIn: false });
  };
