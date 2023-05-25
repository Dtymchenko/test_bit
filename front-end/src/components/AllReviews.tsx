import styles from "./AllReviews.module.scss"
import { useAppSelector } from "../hooks/redux-hooks"
import OneReview from "./OneReview"

const AllReviews = () => {
    const reviews = useAppSelector((state) => state.main.reviews);

    return (
      <div className={styles.wrapper}>
        {reviews.map((review) => (
          <OneReview key={review.id} review={review} />
        ))}
      </div>
    );
}

export default AllReviews
