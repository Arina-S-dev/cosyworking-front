import './MesAnnoncesRefs.scss';
// eslint-disable-next-line object-curly-newline
import { TableCell, TableHead, TableRow, Table, Box, TableBody } from '@mui/material';
import MesAnnoncesDates from './MesAnnoncesDates/MesAnnoncesDates';

function MesAnnoncesRefs(data) {
  // eslint-disable-next-line react/destructuring-assignment
  const getData = data.data;
  // eslint-disable-next-line no-console
  // console.log('Data qui arrivent dans MesAnnoncesRefs', getData);

  return (
    <div className="MesAnnoncesRefs">
      {getData.map((list) => (
        <Box key={list.bookig_ref_id}>
          <Table
          // eslint-disable-next-line react/no-array-index-key
            sx={{
              minWidth: 'auto',
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ backgroundColor: '#e8e8e8', fontWeight: 'bolder' }}>
                  Réservation N°{list.bookig_ref_id}
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
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
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                  }}
                  align="center"
                >
                  Coworker
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                  }}
                  align="center"
                >
                  Statut
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <MesAnnoncesDates allDates={list.bookingId} />
            </TableBody>
          </Table>
        </Box>
      ))}
    </div>
  );
}

export default MesAnnoncesRefs;
