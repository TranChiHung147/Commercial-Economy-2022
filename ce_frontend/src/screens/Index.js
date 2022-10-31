import search from '../components/icon-font/search-outline.svg';
import './Index.css';
import data from './data.js';
import forwardCircle from '../components/icon-font/chevron-forward-circle-outline.svg';
import cart from '../components/icon-font/cart-outline.svg';
import recommend2 from '../components/img/recommend/2.png';
import recommend3 from '../components/img/recommend/3.png';

function Index(){
    return (
    <div className="content">
      <div className="banner">
        <div className="banner-search-container">
          <input
            className="banner-search-input"
            placeholder="Bạn thích sản phẩm robot nào?"
            type="text"
          />
          <button className="banner-search-icon button-hover">
            <img src={search} className="search-outline"></img>
          </button>
        </div>
        <div className="banner-text">
          Chúng tôi cung cấp sản phẩm Robot hút bụi uy tín, chất lượng số 1 thị
          trường
        </div>
      </div>

      <div className="HeadSlider">
        <div className="HeadSlider-item">
          <img src={require("../components/img/HeadSlider/user.png")} alt="" className="HS-item-img" />
          <div className="HS-item-text">Dành cho bạn</div>
        </div>

        <div className="HeadSlider-item">
          <img src={require("../components/img/HeadSlider/1010.png")} alt="" className="HS-item-img" />
          <div className="HS-item-text">Siêu sale 10.10</div>
        </div>

        <div className="HeadSlider-item">
          <img
            src={require("../components/img/HeadSlider/newproduct.png")}
            alt=""
            className="HS-item-img"
          />
          <div className="HS-item-text">Sản phẩm mới</div>
        </div>

        <div className="HeadSlider-item">
          <img src={require("../components/img/HeadSlider/cheapest.png")} alt="" className="HS-item-img" />
          <div className="HS-item-text">Rẻ vô đối</div>
        </div>

        <div className="HeadSlider-item">
          <img src={require("../components/img/HeadSlider/gop.png")} alt="" className="HS-item-img" />
          <div className="HS-item-text">Trả góp 0%</div>
        </div>

        <div className="HeadSlider-item">
          <img src={require("../components/img/HeadSlider/dealhot.png")} alt="" className="HS-item-img" />
          <div className="HS-item-text">Deal hot</div>
        </div>
      </div>

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
          <img
            className="DP-buynow-button"
            name="chevron-forward-circle-outline"
            src={forwardCircle}
          ></img>
        </div>
      </div>

      <div className="recommend">
        <div className="recommend-left">
          <div className="rl-container">
            <div className="rl-name">Ecovacs Deebot Ozmo 920</div>
            <div className="rl-desc">
              Với thiết kế hoàn toàn mới, tối ưu kích thước giúp OZMO920 dễ dàng
              tiếp cận và làm sạch tất cả các vị trí trong căn hộ của bạn. Công
              nghệ tăng áp động cơ hút và chổi đa năng thế hệ 2.0 kết hợp pin
              dung lượng cao mang đến hiệu suất làm sạch mạnh mẽ nhất.
            </div>
            <div className="rl-price">
              <div className="rl-price-off">19.900.000 đ</div>
              <div className="rl-price-on">9.900.000 đ</div>
            </div>
            <div className="rl-button">
              <div className="rl-button-buynow btn-shake">
                <img
                  className="rl-button-buynow-btn"
                  name="cart-outline"
                  src={cart}
                ></img>
                <div className="rl-button-buynow-text">Mua ngay</div>
              </div>
              <div className="rl-button-detail btn-shake">Xem chi tiết</div>
            </div>
          </div>
        </div>
        <div className="recommend-right">
          <div className="recommend-right-top">
            <img className="recommend-img" src={require('../components/img/recommend/2.png')} alt="" />
          </div>
          <div className="recommend-right-bot">
            <img className="recommend-img" src={require("../components/img/recommend/3.png")} alt="" />
          </div>
        </div>
      </div>

        <div className="YourNeed">
         <div className="chapter">
          <div className="chapter-line"></div>
          <div className="chapter-name">
            Hãy nói chúng tôi nghe nhu cầu của bạn!
          </div>
         </div>

         <div className="YN-container">
          {
            data.yourNeed.map( (need) =>
            <div  className="YN-item" >
            <div className="YNi-name">{need.name}</div>
            <img className="YNi-image" src={need.image} alt="" />
            </div>
            )   
          }    
         </div>
        </div>  

      <div className="SmallMarket">
        <div className="chapter">
          <div className="chapter-line"></div>
          <div className="chapter-name">Robot hút bụi chúng tôi có</div>
        </div>
        <div className="SM-container">
          <div className="SM-row">
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
        </div>

        <div className="DP-buynow btn-shake">
          Xem thêm
          <img
            className="DP-buynow-button"
            name="chevron-forward-circle-outline"
            src={forwardCircle}
          ></img>
        </div>
      </div>

      <div className="news">
        <div className="chapter">
          <div className="chapter-line"></div>
          <div className="chapter-name">Tin tức mới</div>
        </div>
        <div className="news-container">
          <div className="news-item">
            <img className="Ni-img" src={require("../components/img/news/1.jpg")} alt="" />
            <div className="Ni-name">
              Top 10+ kinh nghiệm mua Robot hút bụi lau nhà thông minh dành cho
              những cư dân ...
            </div>
            <div className="Ni-desc">
              Chắc hẳn với xu hướng ngày càng bận rộn của giới trẻ và đặc biệt
              là xu hướng kỹ thuật số, tự động hóa mọi thứ thì việc ....
            </div>
          </div>
          <div className="news-item">
            <img className="Ni-img" src={require("../components/img/news/2.jpg")} alt="" />
            <div className="Ni-name">
              So sánh robot hút bụi Xiaomi và Ecovacs – Nên chọn sản phẩm nào
              phù hợp?
            </div>
            <div className="Ni-desc">
              Khi nói về robot hút bụi, chắc hẳn mọi người sẽ nghĩ ngay đến 2
              hãng uy tín nhất trên thị trường hiện nay đó là Xiaomi ...
            </div>
          </div>
          <div className="news-item">
            <img className="Ni-img" src={require("../components/img/news/3.jpg")} alt="" />
            <div className="Ni-name">
              Có thật sự là “Không cần động tay” khi sử dụng Robot hút bụi? Một
              số lưu ý dành cho bạn....
            </div>
            <div className="Ni-desc">
              Robot hút bụi giờ đây đã không còn quá xa lạ với những người nội
              trợ, tuy nhiên có lẽ nhiều người thật sự chưa lưu ý đến các. ....
            </div>
          </div>
          <div className="news-item">
            <img className="Ni-img" src={require("../components/img/news/4.jpg")} alt="" />
            <div className="Ni-name">
              Kinh phí có hạn thì nên mua máy hút bụi hay robot hút bụi để trở
              thành nhà tiêu dùng ...
            </div>
            <div className="Ni-desc">
              Với sự hiện đại của cuộc sống ngày nay thì những thiết bị thông
              minh đang được rất nhiều gia đình lựa chọn. Tuy nhiên, .....
            </div>
          </div>
        </div>
        <div className="DP-buynow btn-shake">
          Xem thêm
          <img
            className="DP-buynow-button"
            name="chevron-forward-circle-outline"
            src={forwardCircle}
          ></img>
        </div>
      </div>

      <div className="trust">
        <div className="chapter">
          <div className="chapter-line"></div>
          <div className="chapter-name">Vì sao bạn nên chọn BK Robotic?</div>
        </div>
        <div className="trust-container">
          <div className="trust-item">
            <img src={require('../components/img/trust/1.png')} alt="" className="Ti-image"/>
            <div className="Ti-name">Miễn phí vận chuyển</div>
          </div>

          <div className="trust-item">
            <img src={require('../components/img/trust/2.png')} alt="" className="Ti-image"/>
            <div className="Ti-name">Cam kết chính hãng</div>
          </div>

          <div className="trust-item">
            <img src={require('../components/img/trust/3.png')} alt="" className="Ti-image"/>
            <div className="Ti-name">Hậu mãi chu đáo</div>
          </div>

          <div className="trust-item">
            <img src={require('../components/img/trust/4.png')} alt="" className="Ti-image"/>
            <div className="Ti-name">Nhiều ưu đãi lớn</div>
          </div>

        </div>
      </div>

      <div className="partner">
        <div className="chapter">
          <div className="chapter-line"></div>
          <div className="chapter-name">Đối tác tin tưởng</div>
        </div>
        <div className="partner-container">
          <img src={require("../components/img/parner/xiaomi.jpg")} alt="" className="parner-img"/>
          <img src={require("../components/img/parner/zalopay.png")} alt="" className="parner-img"/>
          <img src={require("../components/img/parner/ecovacs.png")} alt="" className="parner-img"/>
          <img src={require("../components/img/parner/roborock.png")} alt="" className="parner-img"/>
        </div>
      </div>

    </div>  
    );
}

export default Index;