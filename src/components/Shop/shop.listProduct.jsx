import { useEffect, useState } from "react";
import "./shop.listProduct.css";
import ProductDetails from "./ProductDetails/shop.productDetails";
import { useCategory } from "../../UseContext/CategoryContext";
const ListProduct = () => {
  const [productList, setProductList] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { selectedCategory } = useCategory();

  // Fetch data from API
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = selectedCategory
          ? `${import.meta.env.VITE_DATABASE_URL}/api/client/products/category/${selectedCategory}`
          : `${import.meta.env.VITE_DATABASE_URL}/api/client/products`;
        const res = await fetch(response);
        if (!res.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await res.json();
        setProductList(data);
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }, [selectedCategory]);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };
  return (
    <div>
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
        ProductDetails={selectedProduct}
      />
    </div>
  );
};

export default ListProduct;
