/* eslint-disable eqeqeq */
// import './styles.scss';

// eslint-disable-next-line object-curly-newline
import { TableBody, TableCell, TableHead, TableRow, Table } from '@mui/material';

function MesTables(data) {
  // eslint-disable-next-line react/destructuring-assignment
  const getData = data.data;
  // eslint-disable-next-line no-console
  console.log(getData);

  // Options afin de modifier le format de la date
  // eslint-disable-next-line object-curly-newline
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  // Function afin d'obtenir le creneau 'Matinée', 'Apm' ou 'Journée'
  function getCreneau(a, b) {
    const date1 = new Date(a);
    const date2 = new Date(b);
    const time1 = `${date1.getHours()}h`;
    const time2 = `${date2.getHours()}h`;
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

  function getPrice(a, b) {
    const date1 = new Date(a);
    const date2 = new Date(b);
    const time1 = `${date1.getHours()}h`;
    const time2 = `${date2.getHours()}h`;
    const getTheGoodCreneau = `de ${time1} à ${time2}`;

    if (getTheGoodCreneau === 'de 13h à 17h') {
      return true;
    }
    if (getTheGoodCreneau === 'de 8h à 12h') {
      return true;
    }
    return false;
  }

  return (
    <div className="MesTables">
      <Table
        sx={{
          minWidth: 'auto',
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 'bold',
              }}
              align="center"
            >
              Date(s)
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
              }}
              align="center"
            >
              Creneau(x)
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
              }}
              align="center"
            >
              Prix
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getData.map((list, index) => (
            <TableRow
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                { (new Date(list.start)).toLocaleDateString('fr-FR', options) }
              </TableCell>
              <TableCell align="center">{getCreneau((list.start), (list.end))}</TableCell>
              {getPrice((list.start), (list.end)) && (<TableCell align="center">{list.halfDayPrice}</TableCell>)}
              {!getPrice((list.start), (list.end)) && (<TableCell align="center">{list.dayPrice}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MesTables;
