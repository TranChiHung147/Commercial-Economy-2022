import data from "../data.js";
import "../css/cartscreen.css";

function CartScreen(props) {

  return (
    <div className="cart">
      <div className="cart-list-container">
          <h2>
            Sản phẩm đã chọn
          </h2>
          <p>
            <span>Tên sản phẩm</span>
            <span>Giá của sản phẩm</span>
            <span>Số lượng</span>
          </p>
              {
                data.products.map((product) =>
                <div className="cart-row">
                    <div className="cart-row-product">
                      <img className="cart-img" src={product.image}  alt={product.label} />
                      <p>{product.name}</p>
                    </div>

                    <div className="cart-row-price">
                      {product.priceOn}
                    </div>

                    <div className="cart-row-quatity">
                      2
                    </div>
                    
                    <div className="cart-row-remove">
                      <img src={require("../img/delete.png")} alt="remove"></img>
                    </div>
                </div>)
              }           
      </div>
      <div  className="checkout">
         <a href="/checkout"><button>Thanh toán</button> </a>
      </div>        
    </div>

  );
}

export default CartScreen;