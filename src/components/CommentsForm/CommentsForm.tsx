import type { Artist } from '../../types/Artist.ts';
import { Box, Button, TextField } from '@mui/material';
import styles from './CommentsForm.module.scss';
import { type FormEvent } from 'react';
import {useParams} from "react-router-dom";
import { postComment } from '../../api/users.ts';

type Comment = {
    name: string;
    comment: string;
}

export const CommentsForm = ({artist}:{artist: Artist}) => {

    const { id } = useParams();



    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!id) return;
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data: Comment = Object.fromEntries(formData.entries()) as Comment;
        const comment = await postComment({userId: id?.toString(), user: data.name, text: data.comment})
        console.log(comment)
        form.reset();
    }

  return (
    <Box component='form' className={styles.commentsForm} onSubmit={handleSubmit}>

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