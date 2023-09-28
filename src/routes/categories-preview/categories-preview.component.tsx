import { Fragment } from "react";
import { useSelector } from "react-redux";
import PreviewCategory from "../../components/preview-category/preview-category.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <PreviewCategory key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
