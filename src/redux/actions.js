// import types from './types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contact/add', (name, number) => ({
  payload: { name, number, id: uuidv4() },
}));

const deleteContact = createAction('contact/delete');

const changeFilter = createAction('contact/changeFilter');

// step_1
// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: { name, number, id: uuidv4() },
// });

// const deleteContact = contId => ({
//   type: types.DELETE,
//   payload: contId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };
