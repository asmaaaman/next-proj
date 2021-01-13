import React, { useEffect, useState } from "react";
import Header from "../components/header";
import ProductCard from "./post/productCard/productCard";
import Head from "next/head";

export async function getStaticProps({}) {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();

  return {
    props: {
      products: json,
    },
  };
}

const ProductList = ({ products }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          crossOrigin="anonymous"
        />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"></div>
      </nav>

      <h1> Product List </h1>
      {products && (
        <div className="mt-2 d-flex flex-wrap justify-content-center">
          {products.map((product, id) => (
            <ProductCard key={`${id} id`} product={product} id={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
