import React from "react";
import styles from "./styles.module.css";

interface IProps {
  children: React.ReactElement;
  isVisible: boolean;
  closeModal: (value: boolean) => void;
}

export const Carousel = ({
  carousel_items,
}: {
  carousel_items: Array<any>;
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // const handleToPrevSlide = () => {
  //   if (currentSlide === 0) setCurrentSlide(carousel_items.length - 1);
  //   else setCurrentSlide(currentSlide - 1);
  // };
  // const handleToNextSlide = () => {
  //   if (currentSlide === carousel_items.length - 1) setCurrentSlide(0);
  //   else setCurrentSlide(currentSlide + 1);
  // };

  return (
    <div
      id="header-carousel"
      className="carousel slide"
      data-ride="carousel"
      data-interval="2000"
    >
      <div className="carousel-inner">
        {carousel_items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              currentSlide === index ? "active" : ""
            }`}
            style={{ height: "410px" }}
          >
            <img className="img-fluid" src={item.image} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "720px" }}></div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#header-carousel"
        data-slide="prev"
      >
        <div className="btn btn-dark" style={{ height: "40px", width: "45px" }}>
          <span className="carousel-control-prev-icon mb-n2"></span>
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#header-carousel"
        data-slide="next"
      >
        <div className="btn btn-dark" style={{ height: "40px", width: "45px" }}>
          <span className="carousel-control-next-icon mb-n2"></span>
        </div>
      </a>
    </div>
  );
};

export const ProductDetail = ({ product }: { product: any }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img
            className="img-fluid h-full w-full object-contain"
            src={product.image}
            alt=""
          />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">{product.name}</h6>
          <div className="d-flex justify-content-center">
            <h6>${product.price}.00</h6>
            <h6 className="text-muted ml-2">
              <del>${product.price}.00</del>
            </h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href="" className="btn btn-sm text-dark p-0">
            <i className="fas fa-eye text-primary mr-1"></i>View Detail
          </a>
          <a href="" className="btn btn-sm text-dark p-0">
            <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
            Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export const ContainerModal = (props: IProps) => {
  const { isVisible, children, closeModal } = props;
  return (
    <React.Fragment>
      {isVisible && (
        <div
          onClick={() => closeModal(true)}
          className={styles.overlayModal}
        ></div>
      )}
      <div className={isVisible ? styles.modalVisible : styles.modal}>
        {children}
      </div>
    </React.Fragment>
  );
};

// export default ContainerModal;
