import { format, formatDistanceToNow } from "date-fns";
// import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: {
    paragraph: string;
    link: string;
  };
}
export function Post(props: PostProps) {
  const { author, content, publishedAt } = props;
  const [feedbacks, setFeedbacks] = useState<string[]>([]);
  const [newFeedbackText, setNewFeedbackText] = useState<string>("");

  /****************************/
  /*******BRAZILIAN DATE*******/
  /****************************/
  // const publishedDateFormatted = format(
  //   publishedAt,
  //   "d 'de' LLLL 'às' HH:mm'h'",
  //   {
  //     locale: ptBR,
  //   }
  // );

  const publishedDateFormatted = format(
    publishedAt,
    " LLLL dd, yyyy 'at' h:mm a "
  );

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    // locale: ptBR,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setFeedbacks((prevState) => [...prevState, newFeedbackText]);
    setNewFeedbackText("");
  }

  function handleNewFeedbackChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewFeedbackText(event.target.value);
  }

  function handleDeleteFeedback(feedback: string) {
    const feedbackWithNoDeletedOne = feedbacks.filter(
      (item) => item !== feedback
    );
    setFeedbacks(feedbackWithNoDeletedOne);
  }

  const isNewFeedbackEmpty = newFeedbackText.length === 0;

  function handleNewFeedbackInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Please, post a feedback :)");
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publisedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p>{content.paragraph}</p>

        <p>
          <a target="_blank" rel="noopener noreferrer" href={content.link}>
            #MyWebsite{" "}
          </a>
        </p>
      </div>

      <form
        onSubmit={(event) => handleCreateNewComment(event)}
        className={styles.commentForm}
      >
        <strong>Leave a feedback</strong>
        <textarea
          name="feedback"
          placeholder="Post a feedback"
          value={newFeedbackText}
          onChange={(event) => handleNewFeedbackChange(event)}
          onInvalid={handleNewFeedbackInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewFeedbackEmpty}>
            Send
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {feedbacks.map((feedback, index) => (
          <Comment
            key={index}
            feedback={feedback}
            handleDeleteFeedback={handleDeleteFeedback}
          />
        ))}
      </div>
    </article>
  );
}
