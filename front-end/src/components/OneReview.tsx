import React from "react";
import styles from "./OneReview.module.scss";
import { IReview } from "../interface";

interface OneReviewProps {
  review: IReview;
}
const OneReview = ({ review }: OneReviewProps) => {
  const filledStars = Array(review.stars).fill(1);
  const emptyStars = Array(5 - filledStars.length).fill(1);
  const [showFull, setShowFull] = React.useState(false);

  const renderStars = (filledStars: number[], emptyStars: number[]) => {
    return (
      <>
        {filledStars.map((_, index) => (
          <span key={`filled-star-${index}`} className={styles.filledStar}>
            <img src="/img/star-filled.png" alt="star-filled" />
          </span>
        ))}
        {emptyStars.map((_, index) => (
          <span key={`empty-star-${index}`} className={styles.emptyStar}>
            <img src="/img/star-white.png" alt="star-white" />
          </span>
        ))}
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{review.name}</div>
      <div className={styles.date}>{review.date}</div>
      <div className={styles.stars}>{renderStars(filledStars, emptyStars)}</div>
      <div className={styles.short}>{!showFull && review.short}</div>
      <div
        className={styles.more}
        style={
          review.short.length === review.comment.length
            ? { display: "none" }
            : {}
        }
        onClick={() => setShowFull((prev) => !prev)}
      >
        {review.short.length !== review.comment.length && !showFull
          ? "READ MORE"
          : "READ SHORT"}
      </div>
      <div className={styles.full}>{showFull && review.comment}</div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default OneReview;
