import { Button, NavDropdown } from "react-bootstrap";

const NavBarBetween = () => {
  return (
    <div className="navbar-between">
      <div className="navbar-between-content">
        <div className="navbar-logo">
          <img src="../../../../public/Image/Logo/Group.png" alt="" />
          <p>Nông Sản Sạch</p>
        </div>
        <div className="navbar-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search product" />
          <Button>Search</Button>
        </div>
        <div className="navbar-icons">
          <i className="fa-solid fa-bell"></i>
          <div>|</div>
          <i className="fa-solid fa-bag-shopping"></i>
          <div>|</div>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
      <div className="navbar-menu">
        <NavDropdown title="Trang chủ">
          <NavDropdown.Item href="#action/3.1">Tiếng Anh</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Tiếng Trung</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Lựa chọn khác</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Cửa Hàng">
          <NavDropdown.Item href="#action/3.1">Tiếng Anh</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Tiếng Trung</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Lựa chọn khác</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Bài Viết">
          <NavDropdown.Item href="#action/3.1">Tiếng Anh</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Tiếng Trung</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Lựa chọn khác</NavDropdown.Item>
        </NavDropdown>
        <p>Về Chúng Tôi</p>
        <p>Liên Hệ</p>
      </div>
    </div>
  );
};

export default NavBarBetween;
