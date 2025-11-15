import { useEffect, useState } from 'react';
import { instance } from '../api/axios';
import ProductContainer from './ProductContainer';

const Main = () => {
  const [homeReeldata, setHomeReeldata] = useState([]);

  useEffect(() => {
    instance("/products?limit=0")
      .then(response => setHomeReeldata(response.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
      <div className='py-10'>
        <h2 className='text-3xl font-bold my-5 text-[#3F4646] '>Mashhur</h2>
        <ProductContainer categoryData={{ allRefinedProducts: homeReeldata }} />
      </div>
  );
};

export default Main;
