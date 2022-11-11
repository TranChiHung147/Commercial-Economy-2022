import React from 'react'
import '../css/product.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DemoProduct from '../components/DemoProduct';
import YourNeed from '../components/YourNeed';
import Label from '../components/Label';

function Product() {
  return (
    <>
        <Header />
       <DemoProduct />
       <YourNeed />
       <Label/>
        <Footer />
    </>

  )
}

export default Product