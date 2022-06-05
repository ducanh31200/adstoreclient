import React from "react";
import styles from "./styles.module.css";

interface IProps {
  children: React.ReactElement;
  isVisible: boolean;
  closeModal: (value: boolean) => void;
}

export const ProductCard = ({ product }: { product: any }) => {
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
