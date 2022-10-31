import data from './data.js'

function All_product(){
    return (
    <div className="content">
        <div className="content-container">
        {
          data.products.map((product) =>
          <div key={product._id} className="DP-item">
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
        </div>)
        }
         </div>
      </div>
    );
}

export default All_product;