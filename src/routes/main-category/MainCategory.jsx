import { useState, useEffect } from "react";
import { instance } from "../../api/axios";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { Container } from "../../utils/Utils";

const MainCategory = () => {
  const { categoryname } = useParams();
  const [mainCategoryData, setMainCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    instance(`/products/category/${categoryname}`)
      .then((response) => {
        setMainCategoryData(response.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [categoryname]);

  return (
    <Container>
      <h2 className="text-2xl font-semibold mb-4 capitalize">
        {categoryname.replaceAll("-", " ")}
      </h2>

      {loading ? (
        <p>Yuklanmoqda...</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {mainCategoryData.length > 0 ? (
            mainCategoryData.map((product) => (
              <ProductCard key={product.id} productData={product} />
            ))
          ) : (
            <p>Mahsulotlar topilmadi</p>
          )}
        </div>
      )}
    </Container>
  );
};

export default MainCategory;
