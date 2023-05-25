import styles from "./Product.module.scss";
import { IProduct } from "../interface";
import axios from "axios";
import { SERVER_API } from "../API";
import { setProductLikedStatus } from "../redux/slices/mainSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import { Link } from "react-router-dom";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();

  const toggleLikedStatus = async () => {
    try {
      // Update the product.liked value in db.json - just one of the options to save it, for example could be done with localStorege. This is just to show that I can do this ^)
      await axios.patch(`${SERVER_API}/dbGetProducts/${product.id}`, {
        liked: !product.liked,
      });
      dispatch(setProductLikedStatus(product.id));
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className={styles.card}>
      <Link to={`/products/${product.id}`}>
        <div className={styles.img}>
          <span className={styles.img_top}>Shop by Room</span>
          <span className={styles.img_img}>
            <img
              src={
                product.liked ? "/img/heart-red.svg" : "/img/heart-white.svg"
              }
              alt="heart"
              onClick={toggleLikedStatus}
            />
          </span>
          <img src={product.img} alt="product"></img>
          <span className={styles.img_bottom}>Product Details</span>
        </div>

        <div className={styles.top}>
          <span>{product.title}</span>
          <span>{product.price}</span>
        </div>
        <div className={styles.middle}>{product["short-descr"]}</div>
        <div className={styles.bottom}>
          <span>
            <img
              width={20}
              height={20}
              src={
                product.available > 0
                  ? "/img/green-circle.png"
                  : "/img/red-circle.png"
              }
              alt="circle"
            />
          </span>
          <span>
            {product.available > 0
              ? `Available Now ${product.available} Sf`
              : "Not Available Now"}
          </span>
          <div>
            <span className={styles.compare}>Compare</span>
            <input type="checkbox" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
