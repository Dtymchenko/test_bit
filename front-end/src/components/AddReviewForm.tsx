import React, { ReactEventHandler } from "react";
import styles from "./AddReviewForm.module.scss";
import { IReview } from "../interface";
import { useAppDispatch } from "../hooks/redux-hooks";
import { addComment } from "../redux/slices/mainSlice";

const AddReviewForm = () => {
  const dispatch = useAppDispatch();
  const [comment, setComment] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const id: string = Math.random().toString(16).slice(-10);

    const newItem: IReview = {
      id,
      name,
      short: comment.length > 100 ? comment.slice(0, 100) : comment,
      comment,
      date: formattedDate,
      email,
      phone,
      stars: 5,
    };
    dispatch(addComment(newItem));
    setComment("");
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleButtonDisable = React.useCallback(() => {
    if (comment.length === 0 || name.length === 0 || email.length === 0) {
      return true;
    }
    return false;
  }, [comment, name, email]);

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className={styles.comment}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment *"
      ></textarea>
      <div className={styles.middle}>
        <input
          className={styles.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name *"
          type="text"
        ></input>
        <input
          className={styles.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email *"
          type="email"
        ></input>
      </div>
      <input
        className={styles.phone}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone (optional)"
        type="text"
      ></input>
      <div className={styles.bottom}>
        <input type="checkbox"></input>
        <span className={styles.text}>
          Save my name, email and website in this browser for the next time I
          comment
        </span>
      </div>
      <button disabled={handleButtonDisable()} className={styles.button}>
        POST REVIEW
      </button>
    </form>
  );
};

export default AddReviewForm;
