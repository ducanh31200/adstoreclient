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
    console.log(result.data.data);
    if (result.status === 200) {
      saveToLocalStorage("accessToken", result.data.accessToken);
      setState({ ...getState(), isLoggedIn: true, data: result.data.data });
      notifySuccess("Đăng nhập thành công");
      return true;
    }
    notifyError("Sai tài khoản hoặc mật khẩu");
    return false;
  };

export const getUserAsync =
  () =>
  async ({ setState, getState }: Actions) => {
    const result = await authApi.getUser();

    if (result.status === 200) {
      setState({ ...getState(), isLoggedIn: true, data: result.data.data });
      return true;
    }
    return false;
  };
export const logoutAsync =
  () =>
  ({ setState, getState }: Actions) => {
    localStorage.removeItem("accessToken");
    setState({ ...getState(), isLoggedIn: false });
  };
