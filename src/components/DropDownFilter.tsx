import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useProducts } from '../hooks/useProducts';

const DropDownFilter: React.FC = () => {
  const { categories } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    
    if(category === 'all'){
      navigate('/productlist')
    } else {
      navigate(`/productlist/${category}`)
    }
  };

  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-center items-center mt-10'>
        <select
          className="select w-full max-w-xs border border-black lg:mr-4 xs:mb-4"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDownFilter;
