/* eslint-disable react/prop-types */
const CategoryBox = ({ item }) => {
  const { label, icon: Icon } = item;
  console.log(item);
  return (
    <div className="flex flex-col items-center justify-center gap-2  p-3  border-b-2 hover:text-neutral-500 transition cursor-pointer">


      <Icon size={26} ></Icon>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;