import styles from "./ProductList.module.scss";
import { useAppSelector } from "../hooks/redux-hooks";
import Product from "./Product";

interface ProductListProps {
  description: string;
  slogan: string;
}

const ProductList = ({ description, slogan }: ProductListProps) => {
  const products = useAppSelector((state) => state.main.products);

  return (
    <div className={styles.wrapper}>
      <p className={styles.description}>{description}</p>
      <p className={styles.slogan}>{slogan}</p>
      <div className={styles.container}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
