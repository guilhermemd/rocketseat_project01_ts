import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface ICommentProps {
  feedback: string;
  handleDeleteFeedback: (feedback: string) => void;
}
export function Comment(props: ICommentProps) {
  const { feedback, handleDeleteFeedback } = props;
  const [likeCount, setLikeCount] = useState(0);
  function handleLikeFeedback() {
    setLikeCount((prevState) => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/2254731?v=4"
        alt="profile avatar"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme.md</strong>
              <time title="march 29th 11:50:00" dateTime="2023-03-29 11:50:00">
                Published 1 hour ago
              </time>
            </div>
            <button
              title="Delete comment"
              onClick={(e) => handleDeleteFeedback(feedback)}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{feedback}</p>
        </div>
        <footer>
          <button onClick={handleLikeFeedback}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
