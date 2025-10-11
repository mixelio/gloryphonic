import type { Artist } from '../../types/Artist.ts';
import { Box, Button, TextField } from '@mui/material';
import styles from './CommentsForm.module.scss';
import { type FormEvent, useState } from 'react';
import {useParams} from "react-router-dom";

type Comment = {
    name: string;
    comment: string;
}

export const CommentsForm = ({artist}:{artist: Artist}) => {
    const [comment, setComment] = useState<Comment | null>(null);
    const { id } = useParams();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data: Comment = Object.fromEntries(formData.entries()) as Comment;
        localStorage.setItem('comment', JSON.stringify(data));
        setComment(data)
        form.reset();
    }

  return (
    <Box component='form' className={styles.commentsForm} onSubmit={handleSubmit}>
        {comment && <span>comment for {id}</span>}
        {comment && <span>{comment.name}</span>}

      <TextField
        label={'Ваше імʼя'}
        variant={'filled'}
        name={'name'}
      />

      <TextField
        label={`Коментар для ${artist.name}`}
        variant={'filled'}
        multiline
        minRows={4}
        name={'comment'}
      />

        <Button type={'submit'}>Надіслати</Button>

    </Box>
  )
}