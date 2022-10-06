{ for (const row of newDataArray.timeslot) {
  <TableRow
    key={row.timeslot[0].start}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell align="center" component="th" scope="row">
      du {row.timeslot[0].start} au {row.timeslot[0].end}
    </TableCell>
    <TableCell align="center">Matinée</TableCell>
    <TableCell align="center">50 euros</TableCell>
    <TableCell align="center">
      <Button>
        <DeleteRoundedIcon />
      </Button>
    </TableCell>
  </TableRow>;
} }
