import React from "react";
import { Link } from "react-router-dom";

interface Props {
  closeModal: () => void;
  openSignUpModal: () => void;
}

const ModalSignUpByEmail = (props: Props) => {
  const { closeModal, openSignUpModal } = props;

  const handleOpenSignIn = () => {
    closeModal();
    openSignUpModal();
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

export default ModalSignUpByEmail;
