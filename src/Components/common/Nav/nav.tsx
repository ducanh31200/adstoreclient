import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ModalSignIn from "../../../Pages/SignIn/ModalSignIn";
import ModalSignUp from "../../../Pages/SignUp/ModalSignUp/SignUp";
import ModalSignUpByEmail from "../../../Pages/SignUp/ModalSignUp/SignUpByEmail";
import useAuth from "../../../store/auth";
import { ContainerModal } from "../ContainerModal";

const Nav = () => {
  const [stateAuth, actionAuth] = useAuth();
  const [showSignInModal, setSignInModal] = React.useState(false);
  const openSignInModal = () => setSignInModal(true);
  const closeSignInModal = () => setSignInModal(false);
  const [showSignUpModal, setSignUpModal] = React.useState(false);
  const openSignUpModal = () => setSignUpModal(true);
  const closeSignUpModal = () => setSignUpModal(false);
  const [showSignUpByEmailModal, setSignUpByEmailModal] = React.useState(false);
  const openSignUpByEmailModal = () => setSignUpByEmailModal(true);
  const closeSignUpByEmailModal = () => setSignUpByEmailModal(false);
  const handleLogout = () => {
    actionAuth.logoutAsync();
  };
  const location = useLocation();

  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
            id="navbar-vertical"
            style={{ width: "calc(100% - 30px)", zIndex: "10" }}
          >
            <div className="navbar-nav w-100 overflow-hidden">
              <div className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  Phone <i className="fa fa-angle-down float-right mt-1"></i>
                </a>
                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  <a href="" className="dropdown-item">
                    Iphone
                  </a>
                  <a href="" className="dropdown-item">
                    Samsung
                  </a>
                  <a href="" className="dropdown-item">
                    Nokia
                  </a>
                </div>
              </div>
              <a href="" className="nav-item nav-link">
                Laptop
              </a>
              <a href="" className="nav-item nav-link">
                PC
              </a>
              <a href="" className="nav-item nav-link">
                Máy tính bảng
              </a>
              <a href="" className="nav-item nav-link">
                Thiết bị thông minh
              </a>
              <a href="" className="nav-item nav-link">
                Phụ kiện
              </a>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  AD
                </span>
                Store
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link
                  to="/"
                  className={`nav-item nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/product"
                  className={`nav-item nav-link ${
                    location.pathname === "/product" ? "active" : ""
                  }`}
                >
                  Product
                </Link>
                <Link
                  to="/productDetail"
                  className={`nav-item nav-link ${
                    location.pathname === "/productDetail" ? "active" : ""
                  }`}
                >
                  Product Detail
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link
                      to="/cart"
                      className={`nav-item nav-link ${
                        location.pathname === "/cart" ? "active" : ""
                      }`}
                    >
                      Cart
                    </Link>
                    <Link
                      to="/bill"
                      className={`nav-item nav-link ${
                        location.pathname === "/bill" ? "active" : ""
                      }`}
                    >
                      Bill
                    </Link>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`nav-item nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0">
                {stateAuth.isLoggedIn === true ? (
                  <div className="wrap_menuAvatar">
                    <div className="iconAvatar">
                      <img
                        src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/134454217_2852424525075613_6158247242724837492_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=Ya9nhauGKLYAX97Kod5&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT_T4VaGY04lpzSwagxghy1OmuEJ9UE-KicN8jwgUQElHQ&oe=62ABD617"
                        className="w-full h-full object-cover rounded-[50%] user_avatar"
                        alt="avatar"
                      />
                    </div>
                    <div className="wrap_contentHover">
                      <div className="contentHover py-[16px]">
                        <Link
                          to="/personal"
                          className="menuProfile menuLinkHover"
                        >
                          Thông tin cá nhân
                        </Link>
                        <Link
                          to="/thong-tin-ca-nhan"
                          className="menuProfile menuLinkHover"
                        >
                          Tin nhắn
                        </Link>
                        <div className="lineMenu"></div>
                        <a
                          className="menuProfile menuLinkHover text-red-500 font-bold"
                          onClick={handleLogout}
                        >
                          Đăng xuất
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <a className="nav-item nav-link" onClick={openSignInModal}>
                      Sign In
                    </a>
                    <a className="nav-item nav-link" onClick={openSignUpModal}>
                      Sign Up
                    </a>
                  </>
                )}
              </div>
            </div>
          </nav>
          {/* carousel */}
        </div>
      </div>
      <ContainerModal isVisible={showSignInModal} closeModal={closeSignInModal}>
        <ModalSignIn
          closeModal={closeSignInModal}
          openSignUpModal={openSignUpModal}
        />
      </ContainerModal>
      <ContainerModal isVisible={showSignUpModal} closeModal={closeSignUpModal}>
        <ModalSignUp
          closeModal={closeSignUpModal}
          openSignInModal={openSignInModal}
        />
      </ContainerModal>
      <ContainerModal
        isVisible={showSignUpByEmailModal}
        closeModal={closeSignUpByEmailModal}
      >
        <ModalSignUpByEmail
          closeModal={closeSignUpByEmailModal}
          openSignUpModal={openSignUpModal}
        />
      </ContainerModal>
    </div>
  );
};

export default Nav;
