import "./preview-categorystyles";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./preview-categorystyles";
import { CategoryItem } from "../../store/categories/categories.types";
type PreviewProps = {
  title: string;
  products: CategoryItem[];
};
const PreviewCategory = ({ title, products }: PreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default PreviewCategory;
