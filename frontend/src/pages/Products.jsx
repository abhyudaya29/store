import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Items from "../components/Items";
const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const API = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(API);
      const jsonData = await data.json();
      setProducts(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log("Error", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
      <div className="grid xs:grid-col1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl p-2">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {products.length > 0 ? (
            products.map((item) => (
              <Items key={item.id} item={item}/>
            ))
          ) : (
            <p>No products are available</p>
          )}
        </>
      )}
      </div>
      </div>
    </>
  );
};

export default Products;
