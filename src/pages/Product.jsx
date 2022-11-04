import React from 'react'
import '../css/product.css';
import Header from '../components/Header';
import ListProduct from '../components/ListProduct';
import Footer from '../components/Footer';

function Product() {
  return (
    <>
        <Header />
        <ListProduct/>
        <Footer />
    </>

  )
}

export default Product