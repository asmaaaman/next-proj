import React from "react";

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const posts = await res.json();

  const paths = posts.map((post) => `/post/productDetails/${post.id}`);

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.ids}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
}

const ProductDetails = ({ product }) => {
  console.log(product.id, product.title);
  return (
    <>
      {
        <div className="product-card-border-less-wrapper">
          <p className="text-center"> {product.id}</p>
          <div>
            <img src={product.image} alt="product" />
          </div>
          <div className="mt-2 d-flex justify-content-around">
            <p>{product.title}</p>
          </div>
          <p className={"mt-2 text-center"}>{product.description}</p>
        </div>
      }
    </>
  );
};

export default ProductDetails;
