import React from "react";
import ProductList from "../components/ProductList";
import { useAppDispatch } from './../hooks/redux-hooks';
import { IProduct } from "../interface";
import { SERVER_API } from "../API";
import axios from "axios";
import { setProducts } from "../redux/slices/mainSlice";

const ProductsPage = () => {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getData = async () => {
      try {
        const products = await axios.get<IProduct[]>(
          `${SERVER_API}/dbGetProducts`
        );
        dispatch(setProducts(products.data));
      } catch (error) {
        alert("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <ProductList
      description="The innovation leader in luxury vinyl plank"
      slogan="Let's Get Started"
    />
  );
};

export default ProductsPage;
