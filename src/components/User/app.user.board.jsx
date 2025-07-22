import { Container } from "react-bootstrap";
import { Link } from "react-router";
import "./app.user.board.css";

const AppUserBoard = () => {
  return (
    <Container className="user-board">
      <div>
        <i class="fa-solid fa-clock-rotate-left"></i>
        <Link to="/user/order-history" className="nav-link">
          Order History
        </Link>
      </div>
      <div>
        <i class="fa-solid fa-ticket"></i>
        <Link to="/user/coupon" className="nav-link">
          Coupon
        </Link>
      </div>
      <div>
        <i class="fa-regular fa-heart"></i>
        <Link to="/user/favorites" className="nav-link">
          Favorites Products
        </Link>
      </div>
      <div>
        <i class="fa-solid fa-cart-plus"></i>
        <Link to="/user/cart" className="nav-link">
          Cart
        </Link>
      </div>
      <div>
        <i class="fa-solid fa-gear"></i>
        <Link to="/user/setting" className="nav-link">
          Setting
        </Link>
      </div>
      <div>
        <i class="fa-solid fa-right-to-bracket"></i>
        <Link to="/user/farmer" className="nav-link">
          Log Out
        </Link>
      </div>
    </Container>
  );
};

export default AppUserBoard;
