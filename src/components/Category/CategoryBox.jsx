/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoryBox = ({ label, icon: Icon, selected }) => {
 
  console.log(selected)

  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
 
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
      const updatedQuery={...currentQuery,category:label}
      const url= qs.stringifyUrl({
        url:'/',
        query:updatedQuery
      })
      navigate(url)
    
  };
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2  p-3  border-b-2 hover:text-neutral-500 transition cursor-pointer ${selected? 'border-b-orange-500 text-neutral-800' :''} `}
    >
      <Icon size={26}></Icon>
      <div className="text-sm font-medium">{label}</div>
       
    </div>
  );
};

export default CategoryBox;
