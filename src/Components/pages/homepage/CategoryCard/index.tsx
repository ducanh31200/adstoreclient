import React, { useEffect } from "react";
import { ICategory } from "../../../../model/category.model";
import "./style.css";

const CategoryCard = (props: ICategory) => {
  const { _id, name, image_url, products_length } = props;
  return (
    <div className="col-lg-4 col-md-6 pb-1">
      <div className="card product-item border-0 mb-4">
        <div
          className="cat-item d-flex flex-column border mb-4"
          style={{ padding: "30px" }}
        >
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <p className="text-right">{products_length} Products</p>
            <div className="categoryImage">
              <a href="#">
                <img src={image_url} alt="" />
              </a>
            </div>
          </div>
          <h5 className="font-weight-semi-bold m-0 text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
};
export default React.memo(CategoryCard);
