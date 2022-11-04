import React from 'react';
import topic from '../news_img/topic/1.jpg';

function Tech() {
    return (
    <>
  <div className="news-topic">
    <div className="news-topic-name">Tin tức công nghệ</div>
    <div className="readmore">
      Xem thêm <ion-icon name="chevron-forward-outline" />
    </div>
  </div>
  <div className="news-container">
    <div className="news-item">
      <img src={topic} alt="" className="Nsi-img" />
      <div className="Nsi-name">Title</div>
      <div className="Nsi-desc">Content</div>
    </div>
    <div className="news-item">
      <img src={topic} alt="" className="Nsi-img" />
      <div className="Nsi-name">Title</div>
      <div className="Nsi-desc">Content</div>
    </div>
    <div className="news-item">
      <img src={topic} alt="" className="Nsi-img" />
      <div className="Nsi-name">Title</div>
      <div className="Nsi-desc">Content</div>
    </div>
    <div className="news-item">
      <img src={topic} alt="" className="Nsi-img" />
      <div className="Nsi-name">Title</div>
      <div className="Nsi-desc">Content</div>
    </div>
    <div className="news-item">
      <img src={topic} alt="" className="Nsi-img" />
      <div className="Nsi-name">Title</div>
      <div className="Nsi-desc">Content</div>
    </div>
    <div className="news-item">
      <img src={topic} alt="" className="Nsi-img" />
      <div className="Nsi-name">Title</div>
      <div className="Nsi-desc">Content</div>
    </div>
    <div className="news-item">
      <img src={topic} alt="" className="Nsi-img" />
      <div className="Nsi-name">Title</div>
      <div className="Nsi-desc">Content</div>
    </div>
    <div className="news-item">
      <img src={topic} alt="" className="Nsi-img" />
      <div className="Nsi-name">Title</div>
      <div className="Nsi-desc">Content</div>
    </div>
  </div>
</>

  )
}

export default Tech