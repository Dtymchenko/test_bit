import styles from "./Reviews.module.scss";
import AddReviewForm from "./AddReviewForm";
import OneReview from "./OneReview";
import { useAppSelector } from "../hooks/redux-hooks";
import { Link } from "react-router-dom";

const Reviews = () => {
  const reviews = useAppSelector((state) => state.main.reviews);
  const review = reviews[0];

  return (
    <div className={styles.wrapper}>
      <OneReview review={review} />
      <div className={styles.link}>
        <Link to="/reviews/all">READ ALL REVIEWS</Link>
      </div>
      <div className={styles.add}>
        <h1>Leave a Review</h1>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <AddReviewForm />
    </div>
  );
};

export default Reviews;
