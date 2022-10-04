// import './styles.scss';

// eslint-disable-next-line object-curly-newline
import { Button, TableBody, TableCell, TableHead, TableRow, Table } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function MesTables(data) {
  // eslint-disable-next-line react/destructuring-assignment
  const getData = data.data;
  // eslint-disable-next-line indent
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
              <TableCell
                sx={{
                  fontWeight: 'bold',
                }}
                align="center"
              >
                Gérer
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
                  du {list.start} au {list.end}
                </TableCell>
                <TableCell align="center">Matinée</TableCell>
                <TableCell align="center">50 euros</TableCell>
                <TableCell align="center">
                  <Button>
                    <DeleteRoundedIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  // eslint-disable-next-line indent
    );
}

export default MesTables;
