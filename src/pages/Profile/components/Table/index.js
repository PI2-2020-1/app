import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Text, LinkStyled } from './index.style';
import Colors from '../../../../styles/colors';

const BasicTable = ({ users }) => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const rowsTemp = [];
    users.map(user => rowsTemp.push({ name: user.name, email: user.email, username: user.username }));
    setRows(rowsTemp);
  }, [users]);

  const StyledTableRow = withStyles(() => ({
    head: {
      backgroundColor: Colors.primary,
    },
  }))(TableRow);

  const UserLine = ({ row }) => {
    return <TableRow key={row.name}>
      <TableCell align="center">
        <Text>{row.name}</Text>
      </TableCell>
      <TableCell align="center"><Text color={Colors.grey_4}>{row.email}</Text></TableCell>
      <TableCell align="center"><Text>{row.username}</Text></TableCell>
      <TableCell align="center">
        <LinkStyled to='/'><CancelIcon/></LinkStyled>
      </TableCell>
    </TableRow>
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell align="center"><Text color={Colors.fontPrimary} bold>Nome</Text></TableCell>
            <TableCell align="center"><Text color={Colors.fontPrimary} bold>E-mail</Text></TableCell>
            <TableCell align="center"><Text color={Colors.fontPrimary} bold>Username</Text></TableCell>
            <TableCell align="center"><Text color={Colors.fontPrimary} bold>Ações</Text></TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          { rows.map( row => <UserLine row={row}/> )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
