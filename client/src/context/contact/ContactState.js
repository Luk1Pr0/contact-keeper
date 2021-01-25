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
	};
	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add contact
	const addContact = (contact) => {
		contact.id = uuid;
		dispatch({ type: ADD_CONTACT, payload: contact });
	};
	// Delete contact

	// Set current contact

	// Clear current contact

	// Update contact

	// Filter contacts

	// Clear filter

	return (
		<ContactContext.Provider value={
			{
				contacts: state.contacts,
				addContact,
			}
		}>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState;