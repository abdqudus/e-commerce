import categories from "../../categories.json";
import "./directory.style";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.style";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
