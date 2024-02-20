import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input } from '@/app/components/Input';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '45%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ButtonModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='w-[100%]'>
      <Button fullWidth color='success' variant="contained" onClick={handleOpen}>Confirmar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='w-[100%] h-full flex flex-col justify-center '>
                  <h1 className='flex justify-center text-lg text-secondary font-bold'>Login</h1>
                  <div className='w-[100%] flex flex-col gap-2'>
                    <Input placeholder='E-mail' type='email'/>
                    <Input placeholder='Senha' type='password'/>
                  </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}