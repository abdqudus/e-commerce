import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BgImgDiv,
  BodyDiv,
  H2,
  PTag,
} from "./directory-item.style";
type Category = {
  imageUrl: string;
  route: string;
  title: string;
};
type Directory = {
  category: Category;
};
const DirectoryItem = ({ category }: Directory) => {
  const navigate = useNavigate();
  const { imageUrl, title, route } = category;
  const handleNavigation = () => {
    navigate(`/${route}`);
  };
  return (
    <DirectoryItemContainer onClick={handleNavigation}>
      <BgImgDiv className="background-image" imageurl={imageUrl} />
      <BodyDiv>
        <H2>{title}</H2>
        <PTag>Shop now</PTag>
      </BodyDiv>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
