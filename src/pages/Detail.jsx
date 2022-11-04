import React from 'react';
import '../css/detail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailProduct from '../components/DetailProduct';

function Detail() {
  return (
    <>
    <Header />
    <div className="content">
      <div className="product">
        <DetailProduct />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Detail