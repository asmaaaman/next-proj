import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { image, category, title, id } = product;
  console.log("product card", product, id);

  return (
    <>
      {/* <Link href={`/post/productDetails/${encodeURIComponent(id)}`}>
        <img src={image} alt="product-image" />
      </Link> */}
      <Link href={`/post/productDetails/${id}`}>
        {<img src={image} alt="product-image" />}
      </Link>

      <p className="d-flex justify-content-between">
        <strong>{id}</strong>
      </p>
      <p className="d-flex justify-content-between">
        {/* <strong>{product.category}</strong> */}
        <strong>{product.title}</strong>
        <strong>{product.price}</strong>
      </p>
    </>
  );
};
export default ProductCard;
