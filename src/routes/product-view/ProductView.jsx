import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../api/axios";
import BreadCrumb from "../../components/BreadCrumb";
import { Container } from '../../utils/Utils'


const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [defaultTitle] = useState(document.title); // 🔹 HTMLdagi asl title-ni saqlab qo‘yamiz

  useEffect(() => {
    instance(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  // 🔹 Mahsulot nomiga qarab title ni o‘zgartirish
  useEffect(() => {
    if (product?.title) {
      document.title = `${product.title}`;
    } else {
      document.title = defaultTitle; // Bosh sahifadagi title tiklanadi
    }

    // Sahifadan chiqilganda HTML title qayta tiklanadi
    return () => {
      document.title = defaultTitle;
    };
  }, [product, defaultTitle]);

  return (
    <Container>
      <BreadCrumb/>

    <div className="grid grid-cols-5 gap-4">

    <div className="col-span-1">
   {product ? (
        <>
          <img
            src={product.images[1]}
            alt={product.title}
            className="rounded mb-4 w-[300px] h-auto"
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <div className="col-span-2">

      {product ? (
        <>
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded mb-4 w-[300px] h-auto"
          />
          <p>{product.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    <div className="col-span-2"></div>

    </div>
    </Container>
  );
};

export default ProductView;
