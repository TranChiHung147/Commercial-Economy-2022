import React from 'react'
import { useParams } from 'react-router-dom'
import labeldata from '../labeldata';

function DetailProduct() {
  const { id } = useParams();
  var product =  {};
  if (id <= 5) product = labeldata.xiaomi[id-1]
  else if (id <= 11) product = labeldata.ecovacs[id-6]
  else product = labeldata.liectroux[id-12];
  console.log(product);
  return (
    <>
  <div className="center">
    <img src={product.image} alt="" />
    <img src={require("../detail_img/2.png")} style={{ width: "100%" }} alt="" />
  </div>
  <div className="under">
    <div className="price">
      <ion-icon className="price-tag-icon" name="pricetags-outline" />
      <div className="price-text">Giá bán</div>
      <div className="price-self">{product.priceOn}</div>
    </div>
    <div className="more">
      <ion-icon name="heart-circle-outline" className="heart-btn" />
      <ion-icon name="share-social-outline" className="share-btn" />
    </div>
  </div>
  <form action="" className="style-form">
    Màu sắc
    <input type="radio" name="form-detail" defaultValue="den" />
    <label>Đen</label>
    <input type="radio" name="form-detail" defaultValue="xam" />
    <label>Xám</label>
  </form>
  <div className="name-product">{product.name}</div>
  <div className="product-describe">
    Thông tin mô tả
    <ul>
        <p>{product.title}</p>
        {
          product.describe.map((line) =>
          <li>{line}</li>
          )
        }
    </ul> 
  </div>
  <div className="more-detail">
    <div className="detail">Thông tin chi tiết</div>
    <div className="hide">
      Ẩn bớt
      <ion-icon name="chevron-up-outline" />
    </div>
  </div>
  <div className="detail-product">
    <div className="detail-product-item">
      <div className="field">Hạn bảo hành:</div>
      <div className="desc">12 tháng</div>
    </div>
    <div className="detail-product-item">
      <div className="field">Kích thước:</div>
      <div className="desc">340 x 85 x 340 mm</div>
    </div>
    <div className="detail-product-item">
      <div className="field">Xuất xứ:</div>
      <div className="desc">Trung Quốc</div>
    </div>
    <div className="detail-product-item">
      <div className="field">Dung tích chứa bụi:</div>
      <div className="desc">200 ml</div>
    </div>
    <div className="detail-product-item">
      <div className="field">Khối lượng:</div>
      <div className="desc">3 kg</div>
    </div>
    <div className="detail-product-item">
      <div className="field">Dung lượng pin:</div>
      <div className="desc">3400mAh</div>
    </div>
    <div className="detail-product-item">
      <div className="field">Lực hút:</div>
      <div className="desc">5W (~4200pa)</div>
    </div>
    <div className="detail-product-item">
      <div className="field">Màu sắc:</div>
      <div className="desc">Đen, Xám</div>
    </div>
    <div className="detail-product-item">
      <div className="field">Tính năng:</div>
      <div className="desc">
        Điều khiển qua ứng dụng , Tự động quay về đế sạc , Tự động điều chỉnh
        sức hút
      </div>
    </div>
    <div className="detail-product-item">
      <div className="field">Tiện ích:</div>
      <div className="desc">
        Hộp chứa bụi EZ - dễ dàng vệ sinh với nướcLên lịch làm việc và theo dõi
        thông qua app kết nối với điện thoại thông minh
      </div>
    </div>
  </div>
</>

  )
}

export default DetailProduct