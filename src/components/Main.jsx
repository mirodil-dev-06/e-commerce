import { useEffect, useState, Fragment } from 'react';
import { instance } from '../api/axios';
import { Container } from '../utils/Utils';
import { v4 as uuidv4 } from 'uuid';
import ProductContainer from './ProductContainer';

const Main = () => {
  const [homeReeldata, setHomeReeldata] = useState([]);

  useEffect(() => {
    instance("/products?limit=0")
      .then(response => setHomeReeldata(response.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <div className='home__product-carousel'>
        <h2 className='text-xl font-bold mb-3'>All Products</h2>
        <ProductContainer categoryData={{ allRefinedProducts: homeReeldata }} />
      </div>
    </Container>
  );
};

export default Main;
