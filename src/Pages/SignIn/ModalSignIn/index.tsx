import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { ContainerModal } from "../../../Components/common/ContainerModal";
import useAuth from "../../../store/auth";
import { notifyError, notifySuccess } from "../../../utils/notify";
import ModalSignUp from "../../SignUp/ModalSignUp";

interface Props {
  closeModal: () => void;
  openSignUpModal: () => void;
}

const ModalSignIn = (props: Props) => {
  const { closeModal, openSignUpModal } = props;
  const [, actionAuth] = useAuth();
  const { register, handleSubmit } = useForm();

  const handleOpenSignUp = () => {
    closeModal();
    openSignUpModal();
  };

  const submit = async (data: any, e: any) => {
    e.preventDefault();

    const result = await actionAuth.loginAsync(data);
    console.log("result", result);

    if (!result) notifyError("Sai tài khoản hoặc mật khẩu");
    else {
      notifySuccess("Đăng nhập thành công");
      // history.push("/");
    }
  };

  return (
    <div className="login">
      <div className="card login-card">
        <div className="card-body">
          <div className="form-img">
            <Link to="/" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  AD
                </span>
                Store
              </h1>
            </Link>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div className="input-group input-email">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Email/Phone"
                aria-describedby="basic-addon1"
                {...register("email_or_phone")}
                required
              />
            </div>
            <div className="input-group input-password">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-unlock-alt"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-describedby="basic-addon1"
                {...register("password")}
                required
              />
            </div>
            <div className="form-group link-forgot">
              <a href="#">Forgot password</a>
            </div>
            <button type="submit" className="btn btn-primary btn-login">
              Login
            </button>
            <div className="login-social">
              <span>or login by:</span>
              <div className="social-list">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </div>
            <a
              onClick={handleOpenSignUp}
              className="btn btn-primary btn-sign-up"
            >
              Sign up
            </a>
          </form>
        </div>
      </div>
      {/* <ContainerModal isVisible={showSignUpModal} closeModal={closeSignUpModal}>
        <ModalSignUp closeModal={closeSignUpModal} />
      </ContainerModal> */}
    </div>
  );
};

export default ModalSignIn;
