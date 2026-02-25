import type { Artist } from '../../types/Artist.ts';
import { Box, Button, TextField } from '@mui/material';
import styles from './CommentsForm.module.scss';
import { type FormEvent, useState } from 'react';
import {useParams} from "react-router-dom";
import { postComment } from '../../api/users.ts';
import {useStore} from '../../app/store';


interface CommentFromForm {
  user: string;
  text: string;
}

export const CommentsForm = ({artist}:{artist: Artist}) => {
    const [comment, setComment] = useState<Comment | null>(null);
    const { id } = useParams();
    const addComment = useStore(state => state.addComment);

    const handleSubmit = (e: FormEvent) => {
    const [error, setError] = useState<{nameError: string, textError: string}>({
      nameError: '',
      textError: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!id) return;
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data: Comment = Object.fromEntries(formData.entries()) as Comment;
        localStorage.setItem('comment', JSON.stringify(data));
        setComment(data)

        const data: CommentFromForm = {
          user: String(formData.get('user')).trim(),
          text: String(formData.get('text')).trim(),
        }

      if (!data.user) {
        setError(prevState => ({
          ...prevState, nameError: 'Імʼя має бути заповнено'
        }));
      }

      if (!data.text) {
        setError(prevState => ({
          ...prevState, textError: 'Коментар не може бути порожнім'
        }));
      }

      if (error.nameError || error.textError) return;

        const comment = await postComment({userId: String(id), user: data.user, text: data.text})

        addComment(comment)

        form.reset();
    }

  return (
    <Box component='form' className={styles.commentsForm} onSubmit={handleSubmit}>
        {comment && <span>comment for {id}</span>}
        {comment && <span>{comment.name}</span>}

      <TextField
        error={!!error.nameError}
        label={'Ваше імʼя'}
        variant={'filled'}
        name={'user'}
        onChange={() => {
          setError(prevState => ({...prevState, nameError: ''}))
        }}
        helperText={error.nameError}
      />



      <TextField
        error={!!error.textError}
        label={`Коментар для ${artist.name}`}
        variant={'filled'}
        multiline
        minRows={4}
        name={'text'}
        onChange={() => {
          setError(prevState => ({...prevState, textError: ''}))
        }}
        helperText={error.textError}
      />

        <Button type={'submit'}>Надіслати</Button>

    </Box>
  )
}