export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

// actions ======================================

// import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// export const addContact = createAction(
//   'contacts / addContact',
//   (name, number) => {
//     return {
//       payload: {
//         name,
//         number,
//         id: nanoid(),
//       },
//     };
//   }
// );

// export const deleteContact = createAction('contacts / deleteContact');

// export const filterContact = createAction('filter / filterContact');

// reducers =============================

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, filterContact } from './actions';

// const contactsInitialState = {
//   contacts: [],
// };
// const filterInitialState = {
//   filter: '',
// };

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     state.contacts.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     const index = state.contacts.findIndex(
//       contact => contact.id === action.payload
//     );
//     state.contacts.splice(index, 1);
//   },
// });

// export const filterReducer = createReducer(filterInitialState, {
//   [filterContact]: (state, action) => {
//     state.filter = action.payload;
//   },
// });

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts / addContact': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts / deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter / filterContact': {
//       return {
//         filter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
