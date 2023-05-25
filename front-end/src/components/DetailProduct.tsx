import React from "react";
import styles from "./DetailProduct.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IProduct } from "../interface";
import { SERVER_API } from "../API";

const DetailProduct = () => {
  const params = useParams();
  const [item, setItem] = React.useState<IProduct>();

  React.useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(
          `${SERVER_API}/dbGetProducts/${params.id}`
        );
        setItem(response.data);
      } catch (error: any) {
        alert(error.message);
        console.log(error.message);
      }
    };
    getDetail();
  }, [params.id]);

  console.log(item);

  return (
    <div>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${item?.img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "150px 75px 0px",
        }}
      >
        <article className={styles.article}>
          <h1>{item?.title}</h1>
          <div className={styles.text}>
            <p>{item?.["full-descr"]}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DetailProduct;
