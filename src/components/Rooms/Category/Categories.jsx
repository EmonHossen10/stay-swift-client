import Container from "../../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryData";
// console.log(categories)

const Categories = () => {
  return (
    <Container>
      <div className="flex py-4 items-center justify-between  overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox key={item.label} item={item}  ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
