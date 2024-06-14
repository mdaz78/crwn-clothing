import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import "./category.styles.scss";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  console.log({
    products,
    categoriesMap,
    category,
    p: categoriesMap[category],
  });

  return (
    <div className="category-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Category;
