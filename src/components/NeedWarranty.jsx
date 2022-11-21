import React from 'react'

import "../css/needwarranty.css";

function NeedWarranty({open, onClose}) {
  if(!open) return null
  return (
    <div className="overlay" shouldCloseOnOverlayClick={false}>
      <div className="form-warranty" >
          <form>
            <button className="close-btn" onClick={onClose}>X</button>
            <h4>Yêu cầu bảo hành, sửa chữa</h4>

            <label>Họ và Tên <span>*</span></label>
            <input type="text" id="fullname" name="fullname" placeholder="Nguyễn Văn A"/>

            <div className="left-email">
                <label>Email<span> *</span></label>
                <input type="text" id="email" name="email" placeholder="abc@hcmut.edu.vn" />
            </div>
            <div className="right-phone">
                <label>Số điện thoại</label>
                <input type="text" id="phone" name="phone" placeholder="0948566534"/>
            </div>
            
            <label>Địa chỉ<span> *</span></label>
            <input type="text" id="adr" name="address" placeholder="Đại học Bách Khoa"/>
            <div className="separate"></div>

            <label>Số Serial sản phẩm<span> *</span></label>
            <input type="text" id="sr" name="serial" placeholder="Đại học Bách Khoa" />
            <label>Tên sản phẩm</label>
            <input type="text" id="name-product" name="product" placeholder="Đại học Bách Khoa" />
            <label>Thương hiệu</label>
            <input type="text" id="trademark" name="trademark" placeholder="Đại học Bách Khoa" />
            <label>Mô tả vấn đề của sản phẩm</label>
            <input type="text" id="description" name="description" placeholder="Đại học Bách Khoa" />
            <div className="separate"></div>
            <button className="submit-warranty">Gửi yêu cầu</button>
          </form>
      </div>
    </div>
  )
}

export default NeedWarranty