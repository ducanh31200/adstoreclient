import { createHook, createStore } from "react-sweet-state";
import { loginAsync } from "./auth.action";
import { selector } from "./auth.selector";

export type State = {
  isLoggedIn: boolean;
};

const initialState: State = {
  isLoggedIn: false,
};

const actions = {
  loginAsync,
};

const Store = createStore({
  initialState,
  actions,
});

const useAuth = createHook(Store, { selector: selector });

export default useAuth;
