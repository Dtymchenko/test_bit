import { useEffect } from "react";
import axios from "axios";
import { IProduct, IReview } from "./interface";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import {
  NotFoundPage,
  ProductsPage,
  ReviewsPage,
  MainPage,
  AllReviewsPage,
  DetailProductPage,
} from "./pages";
import "./App.css";
import { setProducts, setReviews } from "./redux/slices/mainSlice";
import { useAppDispatch } from "./hooks/redux-hooks";
import { SERVER_API } from "./API";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
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
    <div className="app">
      <Navigation />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailProductPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/all" element={<AllReviewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
