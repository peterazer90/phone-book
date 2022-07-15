import React, {
  useContext,
  useEffect,
} from 'react';
import {
  Box, Button, Container, Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';

import { useFormEvents } from '../Hooks';
import { LANGUAGE_CONTEXT, STORE_CONTEXT } from '../Hooks/Contexts';
import { ENDPOINTS, OPERATIONS, REQUEST } from '../Services';
import { States } from '../Store';

function Home() {
  const { translation } = useContext(LANGUAGE_CONTEXT);
  const { store, storeDispatch } = useContext(STORE_CONTEXT);

  const { state, changeEvent } = useFormEvents(States.ADD_USER);
  const { validation, data, disabled } = state;

  useEffect(() => {
    REQUEST(ENDPOINTS.USERS).then((response) => storeDispatch({
      type: OPERATIONS.CREATE, key: 'users', value: response.data,
    }));
  }, []);

  const inputs = [
    {
      id: 1,
      name: 'firstname',
      value: data.firstname,
      validation: validation.firstname,
      label: translation.firstName.label,
      error: translation.firstName.invalid,
    },
    {
      id: 2,
      name: 'lastname',
      value: data.lastname,
      validation: validation.lastname,
      label: translation.lastName.label,
      error: translation.lastName.invalid,
    },
    {
      id: 3,
      name: 'phone',
      value: data.phone,
      validation: validation.phone,
      label: translation.phone.label,
      error: translation.phone.invalid,
    },
  ];

  const submitEvent = () => REQUEST(
    ENDPOINTS.USERS,
    OPERATIONS.CREATE,
    data,
  ).then(() => storeDispatch({
    type: OPERATIONS.CREATE,
    key: 'users',
    value: [{ ...data, id: store.users.length + 1 }, ...store.users],
  }));

  return (
    <Container fixed>
      <Box sx={{ bgcolor: '#f4f4f4', padding: 5, height: '100vh' }}>
        <Box sx={{ bgcolor: '#fff', padding: 3, width: 500 }} mb={3} mx="auto">
          {inputs.map((input) => (
            <TextField
              fullWidth
              required
              error={input.validation === 'warning' && true}
              key={input.id}
              label={input.label}
              name={input.name}
              value={input.value}
              id="fullWidth"
              color={input.validation === 'warning' ? 'warning' : 'success'}
              margin="normal"
              size="small"
              helperText={input.validation === 'warning' && input.error}
              onChange={({ target }) => changeEvent(target)}
            />
          ))}
          <Button
            fullWidth
            disableElevation
            disabled={disabled}
            variant="contained"
            onClick={submitEvent}
          >
            {translation.button.submit}
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{translation.firstName.label}</TableCell>
                <TableCell>{translation.lastName.label}</TableCell>
                <TableCell>{translation.phone.label}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {store.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Home;
