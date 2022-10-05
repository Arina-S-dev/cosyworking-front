import * as React from 'react';
import './ContactUs.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContactIMG from '../../img/contactus.png';

function ContactUs() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="contactContainer">
      <img src={ContactIMG} alt="Contact" />
      <h1>Une remarque ? Une question ? Contactez-Nous</h1>
      <div className="formContainer">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch', maxWidth: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="formLine">
            <TextField
              required
              id="outlined-required"
              label="Nom"
              size="medium"
            />
            <TextField
              required
              id="outlined-required"
              label="Prénom"
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '62ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="formLine">
            <TextField
              required
              id="fullWidth"
              label="Adresse Email"
              className="inputlarge"
            />
          </div>
          <div className="formLine">
            <TextField
              required
              id="fullWidth"
              label="Sujet de votre demande"
              className="inputlarge"
            />
          </div>
          <div className="formLine">
            <TextField
              id="outlined-multiline-flexible"
              label="Votre Message"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
            />
          </div>
          <div className="buttonContainer">
            <Button variant="contained">Envoyer ma demande</Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
export default ContactUs;
