import React, { useEffect, useState } from "react";
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
    </>
  );
};

export default Products;
