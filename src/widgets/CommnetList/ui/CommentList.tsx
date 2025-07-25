import type { Comment } from "../../../types/CommnetType";
import CommentCard from "../../../entities/comment/ui/CommentCard";
import styles from "./CommentList.module.css";
import ItemList from "../../../shared/ui/ItemList/ItemList";
interface CommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <div className={styles.comments}>
      <ItemList
        items={comments}
        renderItem={(comment) => <CommentCard key={comment.id} comment={comment} />}
      />
    </div>
  );
};

export default CommentList;
