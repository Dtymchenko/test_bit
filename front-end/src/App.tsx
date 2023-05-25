
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

function App() {

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
