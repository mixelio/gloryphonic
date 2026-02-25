import { useEffect } from 'react';
// import type { Comment } from '../../types/Comment.ts';
import { getComments } from '../../api/users.ts';
import { useStore } from '../../app/store';
import styles from './CommentsList.module.scss';
import { Chip, Divider } from '@mui/material';

export const CommentsList = ({ userId }: { userId: string }) => {
  const currentComments = useStore((state) => state.comments);

  const setCurrentComments = useStore((state) => state.setInitialComments);

  useEffect(() => {
    (async () => {
      const fetchedComments = await getComments({ userId });

      setCurrentComments(fetchedComments);
    })();
  }, []);

  return (
    <div className={styles.commentsContainer}>
      <p className={styles.commentsLabel}>
        Коментарі <Chip label={currentComments.length} variant="outlined" />
      </p>
      <Divider sx={{ mt: 3, mb: 3 }} />
      {currentComments.length > 0 ? (
        currentComments.map((comment) => {
          const date = new Date(comment.created_at);
          const localDate = date.toLocaleDateString('uk-UA');

          return (
            <div key={comment.id} className={styles.commentBody}>
              <div className={styles.info}>
                <span className={styles.commentAuthor}>{comment.user}</span>
                <span className={styles.commentDate}>{localDate}</span>
              </div>
              <p className={styles.commentText}>{comment.text}</p>
            </div>
          );
        })
      ) : (
        <p>Ніхто ще не залишав коментарів</p>
      )}
    </div>
  );
};
