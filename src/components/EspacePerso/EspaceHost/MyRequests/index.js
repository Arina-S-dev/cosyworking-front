import Card from '@mui/material/Card';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import MyAccountMenu from '../../../MyAccountMenu';
import theme from '../../../../tools/themeMui';
import ModalConfirm from './modalConfirm';

import image from '../../../../img/desk.jpg';

import './style.scss';

function MyRequests() {
  const dispatch = useDispatch();
  const handleOpen = (event) => {
    const buttonType = event.currentTarget.value;
    dispatch({
      type: 'OPEN_CONFIRM_MODAL',
      buttonType: buttonType,
    });
  };
  const modalIsOpen = useSelector((state) => state.requests.openConfimModal);
  console.log(modalIsOpen);
  return (
    <>
      <MyAccountMenu />

      <ThemeProvider theme={theme}>
        <div className="card-container">
          <Card
            sx={{
              width: {
                xs: 360,
                md: 400,
                lg: 650,
              },
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              alt="workspace"
              height="200"
              width="250"
              image={image}
            />
            <CardContent className="card-details">
              <div className="card-content-flex">
                <Typography gutterBottom variant="h5" component="div" textAlign="left" margin="0">
                  Titre de l'annonce
                </Typography>
              </div>
              <Typography gutterBottom variant="h7" component="div" textAlign="left">
                Dates de réservation
              </Typography>
              <Typography gutterBottom variant="h7" component="div" textAlign="left">
                Adresse : l'Elysée
              </Typography>
              <Typography gutterBottom variant="h7" component="div" textAlign="left">
                Nom du coworker avec avatar
              </Typography>
              <Stack className="card-buttons" spacing={2} direction="row">
                <Button
                  value="refuse"
                  onClick={handleOpen}
                  title="Annuler la demande"
                ><ClearIcon fontSize="large" sx={{ color: 'red', margin: 1 }} />
                </Button>
                <Button
                  value="confirm"
                  onClick={handleOpen}
                  title="Valider la demande"
                ><CheckIcon fontSize="large" sx={{ color: 'green', margin: 1 }} />
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </div>

        {modalIsOpen && <ModalConfirm />}
      </ThemeProvider>
    </>
  );
}

export default MyRequests;
