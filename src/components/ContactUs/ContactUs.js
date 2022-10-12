import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ContactIMG from '../../img/contact.png';
import theme from '../../tools/themeMui';
import './test.scss';

function ContactUs() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
  });
  // const dispatch = useDispatch();
  const onSubmit = (data) => {
    window.Email.send({
      SecureToken: '8bbbd61e-7026-4022-9316-87cf7147abb5',
      To: 'workingcosy@gmail.com',
      From: 'workingcosy@gmail.com',
      Subject: `L'utilisateur ${data.name} ${data.firstName} vous a adressé un message avec l'object ${data.objet}`,
      Body: ` Adresse Email de l'expediteur: ${data.mail}
      Voici le message de ${data.name} ${data.firstName}
      Objet: ${data.objet}
      <P>message:</P>
      <div>
        ${data.message}
      </div>`,
    });
  };
  return (
    <div className="formDiv">
      <img src={ContactIMG} alt="Contact" />
      <h1>Une remarque ? Une question ? Contactez-Nous</h1>
      <form className="formContactUs" onSubmit={handleSubmit(onSubmit)}>
        <div className="formNameFirstName">
          <div className="formMidWitdh">
            <TextField
              required
              className="textfield"
              id="outlined-required"
              label="Nom"
              {...register('name', {
                required: 'Ce champ est obligatoire.',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="Nom"
              render={({ messages }) => (
                messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
                  : null)}
            />
          </div>
          <div className="formMidWitdh">
            <TextField
              required
              className="textfield"
              id="outlined-required"
              label="Prénom"
              {...register('firstName', {
                required: 'Ce champ est obligatoire.',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="FirstName"
              render={({ messages }) => (messages
                ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
                : null)}
            />
          </div>
        </div>
        <div className="formMailMessage">
          <div className="formFullWitdh">
            <TextField
              required
              className="textfield"
              id="outlined-required"
              label="Adresse Mail"
              {...register('mail', {
                required: 'Ce champ est obligatoire.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Veuillez saisir une adresse mail valide',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="Mail"
              render={({ messages }) => (messages
                ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
                : null)}
            />
          </div>
          <div className="formFullWitdh"><TextField
            required
            className="textfield"
            id="outlined-required"
            label="Objet"
            {...register('objet', {
              required: 'Ce champ est obligatoire.',
            })}
          />
            <ErrorMessage
              errors={errors}
              name="Object"
              render={({ messages }) => (messages
                ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
                : null)}
            />
          </div>
          <div className="formFullWitdh">
            <TextField
              required
              className="textfield"
              id="outlined-required"
              label="Message"
              multiline
              rows={6}
              {...register('message', {
                required: 'Ce champ est obligatoire.',
                maxLength: {
                  value: 1000,
                  message: 'Ce champ ne peut pas contenir plus de 100 caracteres',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="Message"
              render={({ messages }) => (messages
                ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
                : null)}
            />
          </div>
        </div>
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            variant="contained"
            sx={{ margin: 3 }}
          >
            Envoyer mon message
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
}
export default ContactUs;
