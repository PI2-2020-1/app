import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Text, LinkStyled } from './index.style';
import Colors from '../../../../styles/colors';
import { deleteEmployee } from '../../../../store/modules/plantation/actions';

const BasicTable = ({ users }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);

  const StyledTableRow = withStyles(() => ({
    head: {
      backgroundColor: Colors.primary,
    },
  }))(TableRow);

  const deleteUserClick = (cpf) => {
    dispatch(deleteEmployee(cpf, user.username));
  };

  const UserLine = ({ row }) => (
    <TableRow key={row.cpf}>
      <TableCell align="center">
        <Text>{row.is_active ? 'Completo' : 'Parcial'}</Text>
      </TableCell>
      <TableCell align="center">
        <Text>{row.cpf || '-'}</Text>
      </TableCell>
      <TableCell align="center">
        <Text>{row.full_name || '-'}</Text>
      </TableCell>
      <TableCell align="center">
        <Text>{row.email || '-'}</Text>
      </TableCell>
      <TableCell align="center">
        <LinkStyled>
          <CancelIcon onClick={() => deleteUserClick(row.cpf)} />
        </LinkStyled>
      </TableCell>
    </TableRow>
  );

  UserLine.propTypes = {
    row: PropTypes.shape({
      cpf: PropTypes.string,
      is_active: PropTypes.bool,
      full_name: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell align="center">
              <Text color={Colors.fontPrimary} bold>
                Status
              </Text>
            </TableCell>
            <TableCell align="center">
              <Text color={Colors.fontPrimary} bold>
                CPF
              </Text>
            </TableCell>
            <TableCell align="center">
              <Text color={Colors.fontPrimary} bold>
                Nome
              </Text>
            </TableCell>
            <TableCell align="center">
              <Text color={Colors.fontPrimary} bold>
                E-mail
              </Text>
            </TableCell>
            <TableCell align="center">
              <Text color={Colors.fontPrimary} bold>
                Ações
              </Text>
            </TableCell>
          </StyledTableRow>
        </TableHead>

        {users.length > 0 && (
          <TableBody>
            {users.map((row) => (
              <UserLine row={row} />
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

BasicTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      cpf: PropTypes.string,
      is_active: PropTypes.bool,
      full_name: PropTypes.string,
      email: PropTypes.string,
    })
  ).isRequired,
};

export default BasicTable;
