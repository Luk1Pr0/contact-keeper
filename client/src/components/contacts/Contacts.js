import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered } = contactContext;

	if (!contacts.length) {
		return <h4 style={{ color: 'crimson' }}>Please add a new contact</h4>
	}

	return (
		<div>
			<TransitionGroup>
				{filtered !== null ?
					filtered.map(contact => (
						<CSSTransition key={contact.id} timeout={500} classNames='item'>
							<ContactItem contact={contact} />
						</CSSTransition>
					))
					:
					contacts.map(contact => (
						<CSSTransition key={contact.id} timeout={500} classNames='item'>
							<ContactItem contact={contact} />
						</CSSTransition>

					))
				}
			</TransitionGroup>
		</div>
	);
}

export default Contacts;
