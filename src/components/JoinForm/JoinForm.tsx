import styles from './JoinForm.module.scss';
import { useStore } from '../../app/store.ts';
import { Box, Button, Dialog, DialogTitle, TextField, Paper } from '@mui/material';
import { type ChangeEvent, type FormEvent, useRef, useState } from 'react';

export const JoinForm = () => {
  const { isJoinFormOpen, toggleJoinFormOpen } = useStore();
  const formRef = useRef<HTMLFormElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleClear = () => {
    if (formRef.current) {
      const currInputs = [...(formRef.current.elements ?? [])];
      currInputs.forEach((input) => {
        if (input instanceof HTMLInputElement) {
          localStorage.removeItem(input.name);
        } else if (input instanceof HTMLTextAreaElement) {
          localStorage.removeItem(input.name);
        }
      });
    }
    setSelectedFileName(null);
    toggleJoinFormOpen(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    file ? setSelectedFileName(file.name) : setSelectedFileName(null);
  };

  const handleClose = () => {
    const currInputs = [...(formRef.current?.elements ?? [])];
    currInputs.forEach((input) => {
      if (input instanceof HTMLInputElement) {
        localStorage.setItem(input.name, input.value);
      } else if (input instanceof HTMLTextAreaElement) {
        localStorage.setItem(input.name, input.value);
      }
    });
    toggleJoinFormOpen(false);
  };

  const getOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataForSend = new FormData(e.currentTarget);
    if (formDataForSend.get('name')?.toString().trim().length === 0) {
      console.log('Введіть імʼя або назву гурту');
      return;
    }
    console.log(formDataForSend.get('name'), formDataForSend.get('email'));
  };

  return (
    <Dialog
      open={isJoinFormOpen}
      onClose={handleClose}
      className={styles.joinFormDialog}
      slotProps={{
        paper: {
          className: styles.joinFormDialogPaper,
          sx: {
            padding: '20px 30px',
            borderRadius: '16px',
          },
        },
      }}
    >
      <DialogTitle>Заявити про себе</DialogTitle>
      <Box ref={formRef} component="form" onSubmit={getOnSubmit} className={styles.joinFormBody}>
        <TextField
          label="імʼя або назва гурту"
          id={'name'}
          name={'name'}
          type={'text'}
          defaultValue={localStorage.getItem('name') ?? ''}
        />
        <TextField
          label={'електронна пошта'}
          id={'email'}
          name={'email'}
          type={'email'}
          defaultValue={localStorage.getItem('email') ?? ''}
        />
        <TextField
          id="description"
          label="Про себе"
          name={'description'}
          placeholder="Розкажіть нам про себе і свою творчіть"
          defaultValue={localStorage.getItem('description') ?? ''}
          multiline
        />
        <Paper
          variant={'outlined'}
          onClick={handleClick}
          sx={{ border: '1px solid', padding: '15px' }}
        >
          {selectedFileName ? selectedFileName : 'Завантажте аудіо чи відеофайл'}
          <input
            ref={fileRef}
            type="file"
            name="file"
            onChange={handleFileChange}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '0',
              left: '0',
              display: 'none',
            }}
          />
        </Paper>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Button type="submit" variant={'contained'} sx={{ flex: '1' }}>
            Надіслати
          </Button>
          <Button type={'button'} variant={'outlined'} onClick={handleClear} sx={{ flex: '1' }}>
            Очистити
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};
