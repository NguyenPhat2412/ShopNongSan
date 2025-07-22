import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./shop.productDetails.css";
const ProductDetails = (props) => {
  const { product } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="product-title">
            <div>{product?.name}</div>
            <div>{product?.stock ? " In Stock" : " Out of Stock"}</div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <img
            src={`${import.meta.env.VITE_DATABASE_URL}${product.img}`}
            alt={product.name}
          />
        </div>
        <div>
          <p>{product.description}</p>
          {Array.from({ length: product.rating }).map((_, index) => (
            <span key={index}>⭐</span>
          ))}
          <p>
            Brand:{" "}
            <img
              src={`${import.meta.env.VITE_DATABASE_URL}${product.brand}`}
              alt={product.name}
            />
          </p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <p>Tag: {product.tag}</p>
          <button>Add To Cart</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductDetails;
