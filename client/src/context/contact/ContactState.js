import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { 
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';
 
const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Lukasz',
				email: 'lukasz@gmail.com',
				phone: '07534083362',
				type: 'personal'
			},
			{
				id: 2,
				name: 'Domi',
				email: 'domi@gmail.com',
				phone: '0712382',
				type: 'personal'
			},
			{
				id: 3,
				name: 'Kuba',
				email: 'kuba@gmail.com',
				phone: '2940239',
				type: 'professional'
			},
		],
		current: null,
		filtered: null,
	};
	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add contact
	const addContact = (contact) => {
		contact.id = uuid;
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	// Delete contact
	const deleteContact = (id) => {
		dispatch({type: DELETE_CONTACT, payload: id})
	}

	// Set current contact
	const setCurrent = (contact) => {
		dispatch({type: SET_CURRENT, payload: contact})
	}

	// Clear current contact
	const clearCurrent = () => {
		dispatch({type: CLEAR_CURRENT})
	}

	// Update contact
	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	}

	// Filter contacts
	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	}

	// Clear filter
	const clearFilter = () => {
		dispatch({type: CLEAR_FILTER})
	}

	return (
		<ContactContext.Provider value={
			{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter
			}
		}>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState;