import forward from '../components/icon-font/chevron-forward-outline.svg';
import './News.css';

function News(){
    return (
    <div className="content">
      <div className="main">
        <div className="chapter">
          <div className="chapter-line"></div>
          <div className="chapter-name">Tin tức mới</div>
        </div>
        <div className="main-container">
          <div className="main-col-2 main-tag-1">
            <a className="main-tag" href="#tech">Tin tức công nghệ</a>
          </div>
          <div className="main-col-2">
            <div className="main-row-2">
              <div className="main-col-2 main-tag-2">
                <a className="main-tag" href="#customer">Chia sẻ tư vấn</a>
              </div>
              <div className="main-col-2 main-tag-3">
                <a className="main-tag" href="#rate">Đánh giá sản phẩm</a>
              </div>
            </div>
            <div className="main-row-2 main-tag-4">
                <a className="main-tag" href="#guide">Hướng dẫn, giải đáp</a>
            </div>
          </div>
        </div>

        <div id="tech">
          <div className="news-topic">
            <div className="news-topic-name">Tin tức công nghệ</div>
            <div className="readmore">
              Xem thêm <img src={forward} name="chevron-forward-outline"></img>
            </div>
          </div>
          <div className="news-container">
            <div className="news-item">
              <img src={require("../components/news_img/topic/1.jpg")} alt="" className="Nsi-img" />
              <div className="Nsi-name">Title</div>
              <div className="Nsi-desc">Content</div>
            </div>
            <div className="news-item">
              <img src={require("../components/news_img/topic/1.jpg")} alt="" className="Nsi-img" />
              <div className="Nsi-name">Title</div>
              <div className="Nsi-desc">Content</div>
            </div>
            <div className="news-item">
              <img src={require("../components/news_img/topic/1.jpg")} alt="" className="Nsi-img" />
              <div className="Nsi-name">Title</div>
              <div className="Nsi-desc">Content</div>
            </div>
            <div className="news-item">
              <img src={require("../components/news_img/topic/1.jpg")} alt="" className="Nsi-img" />
              <div className="Nsi-name">Title</div>
              <div className="Nsi-desc">Content</div>
            </div>
            <div className="news-item">
              <img src={require("../components/news_img/topic/1.jpg")} alt="" className="Nsi-img" />
              <div className="Nsi-name">Title</div>
              <div className="Nsi-desc">Content</div>
            </div>
            <div className="news-item">
              <img src={require("../components/news_img/topic/1.jpg")} alt="" className="Nsi-img" />
              <div className="Nsi-name">Title</div>
              <div className="Nsi-desc">Content</div>
            </div>
            <div className="news-item">
              <img src={require("../components/news_img/topic/1.jpg")} alt="" className="Nsi-img" />
              <div className="Nsi-name">Title</div>
              <div className="Nsi-desc">Content</div>
            </div>
            <div className="news-item">
              <img src={require("../components/news_img/topic/1.jpg")} alt="" className="Nsi-img" />
              <div className="Nsi-name">Title</div>
              <div className="Nsi-desc">Content</div>
            </div>
          </div>

          <div id="customer">
            <div className="news-topic">
              <div className="news-topic-name">Chia sẻ của khách hàng</div>
              <div className="readmore">
                Xem thêm <img src={forward} name="chevron-forward-outline"></img>
              </div>
            </div>
            <div className="news-container">
              <div className="news-item">
                <img src={require("../components/news_img/customer/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Anh/chị</div>
                <div className="Nsi-desc">Lời nhắn</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/customer/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Anh/chị</div>
                <div className="Nsi-desc">Lời nhắn</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/customer/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Anh/chị</div>
                <div className="Nsi-desc">Lời nhắn</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/customer/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Anh/chị</div>
                <div className="Nsi-desc">Lời nhắn</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/customer/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Anh/chị</div>
                <div className="Nsi-desc">Lời nhắn</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/customer/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Anh/chị</div>
                <div className="Nsi-desc">Lời nhắn</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/customer/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Anh/chị</div>
                <div className="Nsi-desc">Lời nhắn</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/customer/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Anh/chị</div>
                <div className="Nsi-desc">Lời nhắn</div>
              </div>
            </div>
          </div>

          <div id="rate">
            <div className="news-topic">
              <div className="news-topic-name">Đánh giá sản phẩm</div>
              <div className="readmore">
                Xem thêm <img src={forward} name="chevron-forward-outline"></img>
              </div>
            </div>
            <div className="news-container">
              <div className="news-item">
                <img src={require("../components/news_img/rate/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Bình luận</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/rate/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Bình luận</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/rate/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Bình luận</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/rate/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Bình luận</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/rate/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Bình luận</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/rate/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Bình luận</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/rate/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Bình luận</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/rate/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Bình luận</div>
              </div>
            </div>
          </div>
          <div id="guide">
            <div className="news-topic">
              <div className="news-topic-name">Hướng dẫn,giải đáp</div>
              <div className="readmore">
                Xem thêm <img src={forward} name="chevron-forward-outline"></img>
              </div>
            </div>
            <div className="news-container">
              <div className="news-item">
                <img src={require("../components/news_img/guide/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Hướng dẫn sử dụng, lưu ý</div>
              </div>

              <div className="news-item">
                <img src={require("../components/news_img/guide/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Hướng dẫn sử dụng, lưu ý</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/guide/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Hướng dẫn sử dụng, lưu ý</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/guide/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Hướng dẫn sử dụng, lưu ý</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/guide/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Hướng dẫn sử dụng, lưu ý</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/guide/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Hướng dẫn sử dụng, lưu ý</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/guide/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Hướng dẫn sử dụng, lưu ý</div>
              </div>
              <div className="news-item">
                <img src={require("../components/news_img/guide/1.jpg")} alt="" className="Nsi-img" />
                <div className="Nsi-name">Sản phẩm</div>
                <div className="Nsi-desc">Hướng dẫn sử dụng, lưu ý</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      );
}

export default News;