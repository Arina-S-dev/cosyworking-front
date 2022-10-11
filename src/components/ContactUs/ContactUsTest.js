/* eslint-disable no-console */
import * as React from 'react';
import './ContactUs.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContactIMG from '../../img/contactus.png';

function ContactUsTest() {
  const [Name, setName] = React.useState('');
  const [FirstName, setFirstName] = React.useState('');
  const [Mail, setMail] = React.useState('');
  const [Object, SetObject] = React.useState('');
  const [Message, SetMessage] = React.useState('');

  console.log(Name, FirstName, Mail);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleMail = (event) => {
    setMail(event.target.value);
  };
  const handleObject = (event) => {
    SetObject(event.target.value);
  };
  const handleMessage = (event) => {
    SetMessage(event.target.value);
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
              error={Name.length === 0}
              helperText="Ce champ est requis"
              id="outlined-required"
              label="Nom"
              size="medium"
              value={Name}
              onChange={handleName}
            />
            <TextField
              required
              id="outlined-required"
              label="Prénom"
              value={FirstName}
              onChange={handleFirstName}
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
              value={Mail}
              onChange={handleMail}
            />
          </div>
          <div className="formLine">
            <TextField
              required
              id="fullWidth"
              label="Sujet de votre demande"
              className="inputlarge"
              value={Object}
              onChange={handleObject}
            />
          </div>
          <div className="formLine">
            <TextField
              id="outlined-multiline-flexible"
              label="Votre Message"
              multiline
              maxRows={4}
              value={Message}
              onChange={handleMessage}
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
export default ContactUsTest;
