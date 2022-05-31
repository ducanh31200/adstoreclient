import React from "react";

type ICategoryCard = {
  image: string;
  categoryName: string;
  quantity: number;
};

const CategoryCard = (props: ICategoryCard) => {
  const { image, categoryName, quantity } = props;

  return (
    <div className="col-lg-4 col-md-6 pb-1">
      <div
        className="cat-item d-flex flex-column border mb-4"
        style={{ padding: "30px" }}
      >
        <p className="text-right">{quantity} Products</p>
        <a
          href=""
          className="cat-img position-relative overflow-hidden mb-3 p-3 flex justify-content-center"
        >
          <img className="img-fluid w-full" src={image} alt="" />
        </a>
        <h5 className="font-weight-semi-bold m-0 text-center">
          {categoryName}
        </h5>
      </div>
    </div>
  );
};
export default React.memo(CategoryCard);
