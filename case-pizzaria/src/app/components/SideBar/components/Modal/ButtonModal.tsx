import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ScreenLogin } from './ScreenLogin';
import { ScreenSignup } from './ScreenSignup';
import { ScreenAddress } from './ScreenAddress';


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
  const [screen, setScreen] = React.useState('login');

  let screenTela;

  switch(screen){
    case 'login': screenTela = <ScreenLogin setScreen={setScreen}/>;
      break;
    case 'cadastro': screenTela = <ScreenSignup setScreen={setScreen}/>;
      break;
    case 'endereco': screenTela = <ScreenAddress setScreen={setScreen}/>;
      break;
    default: <ScreenLogin setScreen={setScreen}/>;
  }

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
          {screenTela}
        </Box>
      </Modal>
    </div>
  );
}