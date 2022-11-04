import React from 'react'

function Banner() {
  return (
    <div className="banner">
        <div className="banner-search-container">
            <input
                className="banner-search-input"
                placeholder="Bạn thích sản phẩm robot nào?"
                type="text"
            />
            <button className="banner-search-icon button-hover">
                <ion-icon className="" name="search-outline" />
            </button>
        </div>
        <div className="banner-text">
            Chúng tôi cung cấp sản phẩm Robot hút bụi uy tín, chất lượng số 1 thị trường
        </div>
    </div>
  )
}

export default Banner