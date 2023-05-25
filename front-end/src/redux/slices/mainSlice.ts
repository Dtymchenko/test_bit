import { createSlice } from "@reduxjs/toolkit";
import { IProduct, IReview } from "../../interface";
import { dbReviews } from "../../../mock-tool/dbReviews";

export interface initialStateInterface {
  products: IProduct[];
  reviews: IReview[];
}

const initialState: initialStateInterface = {
  products: [],
  reviews: dbReviews,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setProductLikedStatus: (state, action) => {
      const currentItem = state.products.find(
        (item) => item.id === action.payload
      );
      if (currentItem) {
        currentItem.liked = !currentItem.liked;
      }
    },
    addComment: (state, action) => {
      state.reviews = [...state.reviews, action.payload];
    },
  },
});

export const { setProducts, setReviews, setProductLikedStatus, addComment } =
  mainSlice.actions;

export default mainSlice.reducer;
