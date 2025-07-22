import { useEffect, useState } from "react";
import "./shop.listProduct.css";
import ProductDetails from "./ProductDetails/shop.productDetails";
const ListProduct = () => {
  const [productList, setProductList] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch data from API
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          `${import.meta.env.VITE_DATABASE_URL}/api/client/products`
        );
        const data = await response.json();
        console.log("Product data:", data);
        setProductList(data);
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }, []);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };
  return (
    <div>
      <h1>List Product</h1>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-image">
              <img
                src={`${import.meta.env.VITE_DATABASE_URL}${product.img}`}
                alt={product.name}
                onClick={() => handleShowDetails(product)}
              />
            </div>
            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <span className="product-price">${product.price.toFixed(2)}</span>
              {product.price_old && (
                <span className="product-price-old">${product.price_old}</span>
              )}
              <div>
                {Array.from({ length: product.rating }).map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </div>
            </div>
            {product.discount && (
              <span className="product-discount">Sale {product.discount}%</span>
            )}
          </div>
        ))}
      </div>
      <ProductDetails
        show={showDetails}
        onHide={() => setShowDetails(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default ListProduct;
