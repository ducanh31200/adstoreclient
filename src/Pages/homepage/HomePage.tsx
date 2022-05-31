import React from "react";
import vendor1 from "../../img/amd.jpg";
import vendor2 from "../../img/apple.jpg";
import vendor3 from "../../img/asus.png";
import vendor4 from "../../img/intel.png";
import vendor5 from "../../img/oppo.jpg";
import vendor6 from "../../img/dell.jpg";
import vendor7 from "../../img/samsung.png";
import vendor8 from "../../img/msi.png";
import offer1 from "../../img/iphone13.jpg";
import offer2 from "../../img/samsungs22.jpg";

import payment from "../../img/payments.png";
import { Link } from "react-router-dom";
import CategoryCard from "../../Components/pages/homepage/CategoryCard";
import {
  CATEGORIES,
  FAKE_PRODUCT_DATA,
  CAROUSEL_ITEMS,
} from "../../constants/base.constants";
import { ContainerModal } from "../../Components/common/ContainerModal";
import { ProductDetail } from "../../Components/common/ContainerModal";
import { Carousel } from "../../Components/common/ContainerModal";
import ModalSignIn from "../SignIn/ModalSignIn";
import ModalSignUp from "../SignUp/ModalSignUp";
import useAuth from "../../store/auth";

const HomePage = () => {
  const [stateAuth] = useAuth();
  const [showSignInModal, setSignInModal] = React.useState(false);
  const openSignInModal = () => setSignInModal(true);
  const closeSignInModal = () => setSignInModal(false);
  const [showSignUpModal, setSignUpModal] = React.useState(false);
  const openSignUpModal = () => setSignUpModal(true);
  const closeSignUpModal = () => setSignUpModal(false);
  console.log("stateAuth", stateAuth.isLoggedIn);
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href="">
                FAQs
              </a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">
                Help
              </a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">
                Support
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-dark pl-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <Link to="/" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  AD
                </span>
                Store
              </h1>
            </Link>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a href="" className="btn border">
              <i className="fas fa-heart text-primary"></i>
              <span className="badge">0</span>
            </a>
            <a href="" className="btn border">
              <i className="fas fa-shopping-cart text-primary"></i>
              <span className="badge">0</span>
            </a>
          </div>
        </div>
      </div>

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
              className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
              id="navbar-vertical"
            >
              <div
                className="navbar-nav w-100 overflow-hidden"
                style={{ height: "410px" }}
              >
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
                  <Link to="/" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link to="/product" className="nav-item nav-link">
                    Product
                  </Link>
                  <Link to="/productDetail" className="nav-item nav-link">
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
                      <Link to="/cart" className="nav-item nav-link">
                        Cart
                      </Link>
                      <Link to="/bill" className="nav-item nav-link">
                        Bill
                      </Link>
                    </div>
                  </div>
                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  {stateAuth.isLoggedIn === true ? (
                    <>Profile</>
                  ) : (
                    <>
                      <a
                        className="nav-item nav-link"
                        onClick={openSignInModal}
                      >
                        Sign In
                      </a>
                      <a
                        className="nav-item nav-link"
                        onClick={openSignUpModal}
                      >
                        Sign Up
                      </a>
                    </>
                  )}
                </div>
              </div>
            </nav>
            {/* carousel */}
            <Carousel carousel_items={CAROUSEL_ITEMS} />
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Category list */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          {CATEGORIES.map((item, index) => (
            <CategoryCard
              key={index}
              image={item.image}
              quantity={item.quantity}
              categoryName={item.categoryName}
            />
          ))}
        </div>
      </div>

      <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img src={offer1} alt="" />
              <div className="position-relative" style={{ zIndex: "1" }}>
                <h5 className="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold"></h1>
                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img src={offer2} alt="" />
              <div className="position-relative" style={{ zIndex: "1" }}>
                <h5 className="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold"></h1>
                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trandy Products</span>
          </h2>
        </div>
        {/* aaaaaaaaaaaaaaaaaaaaaaaa */}
        <div className="row px-xl-5 pb-3">
          {FAKE_PRODUCT_DATA.map((product, index) => (
            <ProductDetail key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="container-fluid bg-secondary my-5">
        <div className="row justify-content-md-center py-5 px-xl-5">
          <div className="col-md-6 col-12 py-5">
            <div className="text-center mb-2 pb-2">
              <h2 className="section-title px-5 mb-3">
                <span className="bg-secondary px-2">Stay Updated</span>
              </h2>
              <p></p>
            </div>
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-white p-4"
                  placeholder="Email Goes Here"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Just Arrived</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {FAKE_PRODUCT_DATA.map((product, index) => (
            <ProductDetail key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel vendor-carousel"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <a href="" className="text-decoration-none">
              <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                  AD
                </span>
                Store
              </h1>
            </a>
            <p></p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3"></i>TP.HCM
              VN
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3"></i>
              info@example.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
              67890
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="index.html">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-dark mb-2" href="shop.html">
                    <i className="fa fa-angle-right mr-2"></i>Our Shop
                  </a>
                  <a className="text-dark mb-2" href="detail.html">
                    <i className="fa fa-angle-right mr-2"></i>Shop Detail
                  </a>
                  <a className="text-dark mb-2" href="cart.html">
                    <i className="fa fa-angle-right mr-2"></i>Shopping Cart
                  </a>
                  <a className="text-dark mb-2" href="checkout.html">
                    <i className="fa fa-angle-right mr-2"></i>Checkout
                  </a>
                  <a className="text-dark" href="contact.html">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="index.html">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-dark mb-2" href="shop.html">
                    <i className="fa fa-angle-right mr-2"></i>Our Shop
                  </a>
                  <a className="text-dark mb-2" href="detail.html">
                    <i className="fa fa-angle-right mr-2"></i>Shop Detail
                  </a>
                  <a className="text-dark mb-2" href="cart.html">
                    <i className="fa fa-angle-right mr-2"></i>Shopping Cart
                  </a>
                  <a className="text-dark mb-2" href="checkout.html">
                    <i className="fa fa-angle-right mr-2"></i>Checkout
                  </a>
                  <a className="text-dark" href="contact.html">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 py-4"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 py-4"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block border-0 py-3"
                      type="submit"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top border-light mx-xl-5 py-4">
          <div className="col-md-6 px-xl-0"></div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src={payment} alt="" />
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
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
    </div>
  );
};

export default HomePage;
