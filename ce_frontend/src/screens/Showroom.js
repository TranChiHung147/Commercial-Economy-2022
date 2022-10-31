import forward from '../components/icon-font/chevron-forward-outline.svg';
import './Showroom.css';

function Showroom(){
    return (
      <div className="content">
      <div className="map">
        <div className="chapter">
          <div className="chapter-line"></div>
          <div className="chapter-name">Danh sách showroom</div>
        </div>
        <div className="map-container">
          <div className="map-container-item">
            <img src={require("../components/img/map/bd.png")} alt="" className="map-image" />
            <div className="map-info">
              <div className="map-info-item">
                <div className="field">Showroom Dĩ An:</div>
                <div className="content">
                  1/1 Quốc lộ 1K, Đông Hoà, Dĩ An, Bình Dương
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Thời gian hoạt động:</div>
                <div className="content">Thứ 2 - chủ nhật: 8h30 - 18h</div>
              </div>
              <div className="map-info-item">
                <div className="field">Điện thoại:</div>
                <div className="content" >0903765796</div>
              </div>
              <div className="map-info-item">
                <div className="field">Mail:</div>
                <div className="content">Bk_Robotic@tmdt.com</div>
              </div>
            </div>
          </div>

          <div className="map-container-item">
            <img src={require("../components/img/map/q9.png")} alt="" className="map-image" />
            <div className="map-info">
              <div className="map-info-item">
                <div className="field">Showroom Quận 9:</div>
                <div className="content">
                  125 Lê Văn Việt, P. Hiệp Phú, Q. 9, Tp. Hồ Chí Minh
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Thời gian hoạt động:</div>
                <div className="content">Thứ 2 - chủ nhật: 8h30 - 18h</div>
              </div>
              <div className="map-info-item">
                <div className="field">Điện thoại:</div>
                <div className="content" >0903765732</div>
              </div>
              <div className="map-info-item">
                <div className="field">Mail:</div>
                <div className="content">Bk_Robotic@tmdt.com</div>
              </div>
            </div>
          </div>

          <div className="map-container-item">
            <img src={require("../components/img/map/q10.png")} alt="" className="map-image" />
            <div className="map-info">
              <div className="map-info-item">
                <div className="field">Showroom Quận 10:</div>
                <div className="content">
                  18 Trần Thiện Chánh, Q. 10, Tp. Hồ Chí Minh
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Thời gian hoạt động:</div>
                <div className="content">
                  Thứ 2 - thứ 6: 8h30 - 18h, Thứ 7 - chủ nhật: 9h - 16h
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Điện thoại:</div>
                <div className="content" >0903765796</div>
              </div>
              <div className="map-info-item">
                <div className="field">Mail:</div>
                <div className="content">Bk_Robotic@tmdt.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trust">
        <div className="chapter">
          <div className="chapter-line"></div>
          <div className="chapter-name">Vì sao bạn nên chọn BK Robotic?</div>
        </div>
        <div className="trust-container">
          <div className="trust-item">
            <img src={require("../components/img/trust/1.png")} alt="" className="Ti-image" />
            <div className="Ti-name">Miễn phí vận chuyển</div>
          </div>

          <div className="trust-item">
            <img src={require("../components/img/trust/2.png")} alt="" className="Ti-image" />
            <div className="Ti-name">Cam kết chính hãng</div>
          </div>

          <div className="trust-item">
            <img src={require("../components/img/trust/3.png")} alt="" className="Ti-image" />
            <div className="Ti-name">Hậu mãi chu đáo</div>
          </div>

          <div className="trust-item">
            <img src={require("../components/img/trust/4.png")} alt="" className="Ti-image" />
            <div className="Ti-name">Nhiều ưu đãi lớn</div>
          </div>
        </div>
      </div>
      <div className="help">
       
        <div className="chapter">
          <div className="chapter-line"></div>
          <div className="chapter-name">Tư vấn siêu tốc trong 5-10s</div>
        </div>

        <div className="help-container">
          <form className="help-form">
            <div className="center">
              <div className="text">Yêu cầu tư vấn</div>
            </div>
            <div className="inputField">
              <div className="inputField-item">
                <div className="field">
                  Họ và tên
                  <div className="strict">*</div>
                </div>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="field-area"
                />
              </div>
              <div className="inputField-row">
                <div className="inputField-item col-2">
                  <div className="field">
                    Email
                    <div className="strict">*</div>
                  </div>
                  <input
                    type="text"
                    placeholder="abc@hcmut.edu.vn"
                    className="field-area"
                  />
                </div>
                <div className="inputField-item col-2">
                  <div className="field">
                    Số điện thoại
                    <div className="strict">*</div>
                  </div>
                  <input
                    type="text"
                    placeholder="090999999999"
                    className="field-area"
                  />
                </div>
              </div>

              <div className="inputField-item">
                <div className="field">
                  Tiêu đề
                  <div className="strict"></div>
                </div>
                <input
                  type="text"
                  placeholder="Bạn quan tâm sản phẩm nào?"
                  className="field-area"
                />
              </div>
              <div className="inputField-item">
                <div className="field">
                  Nội dung cần tư vấn
                  <div className="strict">*</div>
                </div>
                <input
                  type="text"
                  placeholder="Hãy để lại câu hỏi và chúng tôi sẽ giải quyết sớm nhất"
                  className="field-area"
                />
              </div>
            </div>
            <button type="submit" className="submit-btn">Gửi đi</button>
          </form>

          <div className="help-option">
            
            <div className="help-option-item">
              <div className="topic">Bạn muốn gặp chuyên gia?</div>
              <div className="desc">Bạn băn khoăn khi lựa chọn, robot hút bụi lau nhà của bạn gặp vấn đề. Trò chuyện trực tiếp với các chuyên gia có kinh nghiệm sẽ giúp bạn có câu trả lời và tư vấn chuyên sâu nhất.</div>
              <div className="foot">
                <div className="contact">
                  <div className="text-call">Chat ngay bây giờ </div>
                  <img src={forward} name="chevron-forward-outline" className="help-chat-icon"></img>
                </div>
              </div>
            </div>
            
            <div className="help-option-item">
              <div className="topic">Phản ánh dịch vụ</div>
              <div className="desc">Để nâng cao chất lượng dịch vụ và phục vụ bạn tốt hơn. Chúng tôi mong muốn nhận được phản ánh của bạn về dịch vụ của chúng tôi. Liên hệ ngay với quản lý cấp cao nhất của BK Robotic.</div>
              <div className="foot">
                <div className="contact">
                  <img name="call-outline" className="call-help-icon"></img>
                  <div className="text-call">0938299999</div>
                </div>
              </div>
            </div>

            <div className="help-option-item">
              <div className="topic">Bạn đã từng mua hàng của chúng tôi?</div>
              <div className="desc center"> <img src={require("../components/img/qr.png")} alt=""/></div>
              <div className="foot">Tra cứu điểm thưởng và nhận các ưu đãi định kỳ từ chúng tôi. </div>
            </div>

          </div>
        </div>
     </div>
     </div>
    );
}

export default Showroom;