import React from "react";
import { Link } from "react-router-dom";

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
            <div className="input-group input-phone">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-phone-alt"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group input-address">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-map-marked-alt"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
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
                type="password"
                className="form-control"
                placeholder="Password"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group input-confirm-password">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-check-circle"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                aria-describedby="basic-addon1"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary sign-up-btn-sign-up"
            >
              Sign up
            </button>
            <a
              onClick={handleOpenSignIn}
              className="btn btn-primary sign-up-btn-login"
            >
              Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalSignUp;
