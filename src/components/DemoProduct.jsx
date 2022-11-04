import React from 'react'

function Demo() {
  return (
    <div className="DemoProduct">
    <div className="DP-text">Top robot hút bụi nổi bật</div>
    <div className="DP-container">
      <div className="DP-item">
        <img src={require("../img/DemoProduct/1.png")} alt="" className="DPi-image" />
        <div className="sale">-20%</div>
        <div className="DPi-name">Xiaomi Vacuum 2 pro</div>
        <div className="DPi-label">Xiaomi</div>
        <div className="DPi-price">
          <div className="DPi-price-off">19,000,000 đ</div>
          <div className="DPi-price-on">16,900,000 đ</div>
        </div>
      </div>
      <div className="DP-item">
        <img src={require("../img/DemoProduct/2.png")} alt="" className="DPi-image" />
        <div className="sale">-20%</div>
        <div className="DPi-name">Xiaomi Vacuum 2 pro</div>
        <div className="DPi-label">Xiaomi</div>
        <div className="DPi-price">
          <div className="DPi-price-off">21,000,000 đ</div>
          <div className="DPi-price-on">19,999,999 đ</div>
        </div>
      </div>
      <div className="DP-item">
        <img src={require("../img/DemoProduct/3.png")} alt="" className="DPi-image" />
        <div className="sale">-20%</div>
        <div className="DPi-name">Ecovas ultimate 5</div>
        <div className="DPi-label">Deebot Ecovas</div>
        <div className="DPi-price">
          <div className="DPi-price-off">10,000,000 đ</div>
          <div className="DPi-price-on">8,000,000 đ</div>
        </div>
      </div>
      <div className="DP-item">
        <img src={require("../img/DemoProduct/4.png")} alt="" className="DPi-image" />
        <div className="sale">-20%</div>
        <div className="DPi-name">Liectroux 2021 Pro edition</div>
        <div className="DPi-label">Liectroux</div>
        <div className="DPi-price">
          <div className="DPi-price-off">5,000,000 đ</div>
          <div className="DPi-price-on">4,500,000 đ</div>
        </div>
      </div>
      <div className="DP-item">
        <img src={require("../img/DemoProduct/5.png")} alt="" className="DPi-image" />
        <div className="sale">-20%</div>
        <div className="DPi-name">iLife 12 Pro Max</div>
        <div className="DPi-label">iLife</div>
        <div className="DPi-price">
          <div className="DPi-price-off">18,000,000 đ</div>
          <div className="DPi-price-on">17,000,000 đ</div>
        </div>
      </div>
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

export default Demo