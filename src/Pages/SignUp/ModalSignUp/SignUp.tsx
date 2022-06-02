import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Props {
  closeModal: () => void;
  openSignInModal: () => void;
}

const ModalSignUp = (props: Props) => {
  const { closeModal, openSignInModal } = props;

  const handleOpenSignIn = () => {
    closeModal();
    openSignInModal();
  };
  const handleSignUp = () => {};
  return (
    <div className="sign-up">
      <div className="card sign-up-card">
        <div className="sign-up-card-body">
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
          <form>
            <div className="input-group input-email">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group input-password">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-unlock-alt"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="OTP"
                aria-describedby="basic-addon1"
                // {...register("password")}
                required
              />
              <a className="btn btn-primary btn-get-otp">Get OTP</a>
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
                //   {...register("password")}
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
                placeholder="Confirm Password"
                aria-describedby="basic-addon1"
                //   {...register("password")}
                required
              />
            </div>
            <a
              onClick={handleSignUp}
              className="btn btn-primary sign-up-btn-login btn-sign-up-by-email"
            >
              Sign Up
            </a>
            <a
              onClick={handleOpenSignIn}
              className="btn btn-primary sign-up-btn-login btn-sign-up-by-email"
            >
              Login
              <i className="fa-solid fa-angle-left angle-left"></i>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalSignUp;
