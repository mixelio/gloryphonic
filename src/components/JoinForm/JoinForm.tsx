import styles from './JoinForm.module.scss';
import { useStore } from '../../app/store.ts';
import { Box, Button, Dialog, DialogTitle, TextField, Paper, IconButton } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BackspaceIcon from '@mui/icons-material/Backspace';
import React, { type ChangeEvent, type FormEvent, useRef, useState } from 'react';
import { sentRequestForJoin } from '../../api/users.ts';

export const JoinForm = () => {
  const { isJoinFormOpen, toggleJoinFormOpen } = useStore();
  const formRef = useRef<HTMLFormElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

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
    setSelectedFile(null);
    toggleJoinFormOpen(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    file ? setSelectedFile(file) : setSelectedFile(null);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];

    if (file) {
      setSelectedFile(file);
    }
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

  const getOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataForSend = new FormData(e.currentTarget);
    if (formDataForSend.get('name')?.toString().trim().length === 0) {
      console.error('enter a correct name');
      return;
    }
    if (formDataForSend.get('email')?.toString().trim().length === 0) {
      console.error('enter a correct email');
      return;
    }
    if (formDataForSend.get('description')?.toString().trim().length === 0) {
      console.error('enter a correct description');
      return;
    }
    if (selectedFile) {
      formDataForSend.append('file', selectedFile);
    } else {
      console.error('file is not selected');
      return;
    }

    try {
      await sentRequestForJoin(formDataForSend);
    } catch (e) {
      console.error(e);
    } finally {
      handleClear();
    }
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
            margin: '0',
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
          label={'країна'}
          id={'country'}
          name={'country'}
          type={'text'}
          defaultValue={localStorage.getItem('email') ?? ''}
        />

        <TextField
          id="description"
          label="Про себе"
          name={'description'}
          placeholder="Розкажіть нам про себе і свою творчіть"
          defaultValue={localStorage.getItem('description') ?? ''}
          multiline
          minRows={6}
        />

        <Paper
          variant={'outlined'}
          sx={{
            margin: '0',
            border: '1px solid',
            padding: '30px 15px',
            cursor: 'pointer',
            background: isDragging ? '#333' : '#777',
            boxShadow: isDragging ? '0 0 5px #eee' : 'none',
          }}
          onClick={handleClick}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDragging(false);
          }}
          onDrop={handleDrop}
        >
          {selectedFile ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                opacity: isDragging ? '50%' : '30%',
              }}
            >
              <span>{selectedFile.name}</span>
              <IconButton>
                <BackspaceIcon />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                opacity: isDragging ? '50%' : '30%',
              }}
            >
              <FileUploadIcon />
              <span style={{ cursor: 'pointer' }}>Виберіть або перетягніть файл</span>
            </Box>
          )}
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
          <Button type={'button'} variant={'outlined'} onClick={handleClear} sx={{ flex: '1' }}>
            Очистити
          </Button>
          <Button type="submit" variant={'contained'} sx={{ flex: '1' }}>
            Надіслати
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};
