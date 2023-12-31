import { Routes, Route } from "react-router-dom";

import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import "./shop.component.styles.scss";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
