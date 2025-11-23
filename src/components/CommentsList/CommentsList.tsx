import { useEffect, useState } from 'react';
import type { Comment } from '../../types/Comment.ts';
import { getComments } from '../../api/users.ts';

export const CommentsList = ({userId}:{userId:string}) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedComments = await getComments({userId})

      setComments(fetchedComments);
    })()
  }, []);

  return (
    <>
      <p>
        Тут будуть відображатися коментарі
      </p>
      {comments.length > 0 ? comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      )) : (<p>Ніхто ще не залишав коментарів</p>)}
    </>
  )
}