import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryData";
// console.log(categories)

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  // console.log(category);
  return (
    <Container>
      <div className="flex py-4 items-center justify-between  overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            // item={item}
            selected={category===item.label }
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
