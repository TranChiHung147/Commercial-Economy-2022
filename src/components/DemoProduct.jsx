import React from 'react';
import data from '../data.js';

function DemoProduct() {
  return (
    <div className="DemoProduct">
    <div className="DP-text">Top robot hút bụi nổi bật</div>
    <div className="DP-container">
    {
      data.products.map((product) =>
        <div className="DP-item">
          <a href={`/detail/${product._id}`}>
            <img src={product.image}  alt={product.label} className="DPi-image" />
          </a>
          <div className="sale">{product.sale}</div>
          <div className="DPi-name">{product.name}</div>
          <div className="DPi-label">{product.label}</div>
          <div className="DPi-price">
            <div className="DPi-price-off">{product.priceOff}</div>
            <div className="DPi-price-on">{product.priceOn}</div>
          </div>
        </div>
      )
    }
    </div>
    <div className="DP-buynow btn-shake">
      Mua ngay!
      <ion-icon
        className="DP-buynow-button"
        name="chevron-forward-circle-outline"
      />
    </div>
  </div>

  )
}

export default DemoProduct