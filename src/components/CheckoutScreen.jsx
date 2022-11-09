import "../css/checkoutscreen.css";

function CheckoutScreen(){

    return (
            <div className="container">
              <div className="form">
                <form action="/action_page.php">
                    <h3>Thông tin giao hàng</h3>

                    <label for="fullname"> Họ và tên <span className="star">*</span></label>
                    <input type="text" id="fullname" name="fullname" placeholder="Nguyễn Văn A"/>

                    <div className="left">
                    <label for="email"> Email <span className="star">*</span></label>
                    <input type="text" id="email" name="email" placeholder="abc@gmail.com"/>
                    </div>

                    <div className="right">
                    <label for="phone">Số điện thoại</label>
                    <input type="text" id="phone" name="phone" placeholder="0948566534"/>
                    </div>

                    <label for="adr"> Địa chỉ <span className="star">*</span></label>
                    <input type="text" id="adr" name="address" placeholder="Đại học Bách Khoa"/>

                    <div className="separation"></div>
                   
                    <p>Phương thức thanh toán</p>
                    <div className="radio-item">
                      <label for="COD"><img src="https://cdn-icons-png.flaticon.com/512/5720/5720434.png"/>
                       Thanh toán khi nhận hàng</label>
                      <input type="radio" id="COD" name="pay-method" value="COD"/>
                    </div>
                    
                    <div className="radio-item">
                      <label for="bank"><img src="https://cdn-icons-png.flaticon.com/512/5720/5720434.png"/>
                       Chuyển khoản qua ngân hàng</label>
                      <input type="radio" id="bank" name="pay-method" value="bank"/>
                    </div>
                    <div className="radio-item">
                      <label for="momo"><img src="https://cdn-icons-png.flaticon.com/512/5720/5720434.png"/>
                       Ví momo</label>
                      <input type="radio" id="momo" name="pay-method" value="momo"/>
                    </div>
                    <div className="radio-item">
                      <label for="zalo"><img src="https://cdn-icons-png.flaticon.com/512/5720/5720434.png"/>
                       Ví zalopay</label>
                      <input type="radio" id="zalo" name="pay-method" value="zalo"/>  
                    </div>

                    <div className="separation"></div>
                     
                    <div className="end-form">
                    <p>Giá trị đơn hàng</p>
                    <p>2.200.000đ</p>
                    </div>
                    
                    <div className="end-form">
                    <p>Phí vận chuyển</p>
                    <p>30.000đ</p>
                    </div>
                    
                    <div className="end-form">
                    <p>Tổng cộng</p>
                    <p>2.230.000đ</p>
                    </div>  

                    <div className="separation"></div>
                    <div className="complete-button">
                    <input type="submit" value="Hoàn tất thanh toán" className="btn"/>                  
                    <p>Giỏ hàng</p>
                </div>
                </form>
              </div>  
            </div>
    );
}

export default CheckoutScreen;