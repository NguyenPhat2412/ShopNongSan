import { useEffect, useState } from "react";
import "rc-slider/assets/index.css";
import "./shop.category.css";
const CategoryProduct = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [sale, setSale] = useState(false);

  const handleRangeChange = (values) => {
    setPriceRange(values);
  };

  // Fetch Promise all
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [categoryResponse, productResponse] = await Promise.all([
          fetch(`${import.meta.env.VITE_DATABASE_URL}/api/client/categories`),
          fetch(`${import.meta.env.VITE_DATABASE_URL}/api/client/products`),
        ]);
        const categoryData = await categoryResponse.json();
        const productData = await productResponse.json();

        if (!categoryResponse.ok || !productResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        setCategory(categoryData);
        console.log("Category Data:", categoryData);
        setProducts(productData);
        console.log("Product Data:", productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAll();
  }, []);

  // Filter products have discount
  const displayedProducts = products.filter((product) => {
    const ProductsDiscount = product.discount > 0;
    return ProductsDiscount;
  });

  const ProductSale = sale ? displayedProducts : displayedProducts.slice(0, 3);

  return (
    <div className="category-product">
      <div>
        <h2>All Categories</h2>
        <div className="category-list">
          {category.map((cat) => (
            <div key={cat.id} className="category-item">
              <input type="radio" name="category" />
              <div>{cat.category}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Price</h2>
        <input
          type="text"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
        />
        <input
          type="text"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>

      <div className="rating-filter">
        <h2>Rating</h2>
        <div className="rating-list">
          {[5, 4, 3, 2, 1].map((star) => (
            <label key={star} className="rating-item">
              <input
                type="radio"
                name="rating"
                value={star}
                onChange={() => setSelectedRating(star)}
              />
              {"★".repeat(star)}
              {star < 5 && (
                <span className="gray-stars">{"☆".repeat(5 - star)}</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Sale */}
      <div>
        <h2>Sale</h2>
        <div className="sale-filter">
          {ProductSale.length > 0 &&
            ProductSale.map((product) => (
              <div key={product.id} className="sale-product-item">
                <div>
                  <img
                    src={`${import.meta.env.VITE_DATABASE_URL}${product.img}`}
                    alt={product.name}
                  />
                </div>
                <div className="sale-product-details">
                  <div className="product-name">{product.name}</div>
                  <div>
                    <span className="current-price">${product.price}</span>
                    <span className="old-price">${product.price_old}</span>
                  </div>
                  <div>
                    {Array.from({ length: product.rating }).map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
