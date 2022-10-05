import { Alert, AlertTitle } from '@mui/material';
import ModalConnexion from '../Nav/ModalConnexion/ModalConnexion';
import './styles.scss';
// import { Route, Routes } from 'react-router-dom';

function ModalAlertConnection() {
  return (
    <div className="ModalAlertConnection">
      <Alert
        severity="info"
        sx={{
          zIndex: '4',
        }}
      >
        <AlertTitle>Connexion</AlertTitle>
        Votre session a expiré, veuillez vous <strong>reconnecter!</strong>
        <ModalConnexion />
      </Alert>
    </div>
  );
}

export default ModalAlertConnection;
