// import './styles.scss';
// eslint-disable-next-line object-curly-newline
import { TableCell, TableRow } from '@mui/material';
// import { Link } from 'react-router-dom';

function MesAnnoncesDates(data) {
  // eslint-disable-next-line react/destructuring-assignment
  const getData = data.data;
  // eslint-disable-next-line no-console
  console.log('Data qui arrivent dans MesAnnoncesDates', getData);

  // eslint-disable-next-line indent

  // Options afin de modifier le format de la date
  // eslint-disable-next-line object-curly-newline
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  // Function afin d'obtenir le creneau 'Matinée', 'Apm' ou 'Journée'
  function getCreneau(a, b) {
    const date1 = new Date(a);
    const date2 = new Date(b);
    const time1 = `${date1.getHours('fr-FR')}h`;
    const time2 = `${date2.getHours('fr-FR')}h`;
    const getTheGoodCreneau = `de ${time1} à ${time2}`;

    if (getTheGoodCreneau === 'de 13h à 17h') {
      return 'Après-midi';
    }
    if (getTheGoodCreneau === 'de 8h à 12h') {
      return 'Matin';
    }
    if (getTheGoodCreneau === 'de 8h à 17h') {
      return 'Journée';
    }

    return getTheGoodCreneau;
  }

  return (
    <>
      {getData.map((list) => (
        <TableRow
          key={list.booking_id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="center" component="th" scope="row">
            { (new Date(list.start_date)).toLocaleDateString('fr-FR', options) }
          </TableCell>
          <TableCell align="center">{getCreneau((list.start_date), (list.end_date))}</TableCell>
          <TableCell align="center">50 euros</TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default MesAnnoncesDates;
