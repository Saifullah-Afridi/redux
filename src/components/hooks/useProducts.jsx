import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://fakestoreapi.com/products", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return products;
};
export default useProducts;
