import './Detail.css';
import heart from '../components/icon-font/heart-circle-outline.svg';
import share from '../components/icon-font/share-social-outline.svg';
import pricetag from '../components/icon-font/pricetags-outline.svg';
import chevronu from '../components/icon-font/chevron-up-outline.svg';
import chevronf from '../components/icon-font/chevron-forward-outline.svg';
import chevron_fc from '../components/icon-font/chevron-forward-circle-outline.svg';
import data from './data';

function Detail() {
    return (
        <div className="content">
     
        <div className="product">
        <div className="center">
          <img src={require('../components/detail_img/1.png')} alt="" />
          <img src={require('../components/detail_img/2.png')}  alt="" />
        </div>
        <div className="under">
          <div className="price">
            <img
              className="price-tag-icon"
              name="pricetags-outline"
              src={pricetag}
              alt='pricetag'
            ></img>
            <div className="price-text">Giá bán</div>
            <div className="price-self">5,990,000 đ</div>
          </div>
          <div className="more">
            <img name="heart-circle-outline" className="heart-btn" 
             src={heart}></img>
            <img name="share-social-outline" className="share-btn"
             src={share}></img>
          </div>
        </div>
        <form action="" className="style-form">
          Màu sắc
          <input type="radio" name="form-detail" value="den" />
          <label>Đen</label>
          <input type="radio" name="form-detail" value="xam" /><label
            >Xám</label
          >
        </form>
        <div className="name-product">Robot hút bụi Powerbot-E (VR05R5050WK)</div>
        <div className="product-describe">
          Thông tin mô tả
          <ul>
            Hút sạch bụi, lau sạch nhà cùng lúc
            <li>2 trong 1 - Hút bụi và lau nhà</li>
            <li>Công suất hút mạnh mẽ</li>
            <li>150 phút làm sạch liên tục</li>
            <li>Làm sạch mọi ngóc ngách, chống va chạm</li>
            <li>Điều khiển thông minh mọi lúc, mọi nơi</li>
            <li>Linh hoạt lựa chọn chế độ làm sạch</li>
          </ul>
        </div>
        <div className="more-detail">
          <div className="detail">Thông tin chi tiết</div>
          <div className="hide">
            Ẩn bớt
            <img name="chevron-up-outline" 
              src={chevronu}></img>
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
              Điều khiển qua ứng dụng , Tự động quay về đế sạc , Tự động điều
              chỉnh sức hút
            </div>
          </div>
          <div className="detail-product-item">
            <div className="field">Tiện ích:</div>
            <div className="desc">
              Hộp chứa bụi EZ - dễ dàng vệ sinh với nướcLên lịch làm việc và
              theo dõi thông qua app kết nối với điện thoại thông minh
            </div>
          </div>
        </div>
        <div className="concern">
          <div className="news-topic">
            <div className="news-topic-name">Sản phẩm bạn có thể thích</div>
            <div className="readmore">
              Xem tất cả <img name="chevron-forward-outline"
                    src={chevronf}></img>
            </div>
          </div>

          <div className="DemoProduct">
            <div className="DP-container">
            {
          data.products.map((product) =>
          <div key={product._id} className="DP-item">
          <img src={product.image}  alt={product.label} className="DPi-image" />
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
              <img
                className="DP-buynow-button"
                name="chevron-forward-circle-outline"
                src={chevron_fc}
              ></img>
            </div>
          </div>
          </div>
       
      </div>

    </div>
    );
}

export default Detail;

