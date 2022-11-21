import { useDispatch, useSelector } from 'react-redux';
import { FiUser } from "react-icons/fi";
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css'

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const searchContact = useSelector(state => state.filter.filter).toLowerCase().trim();

    const onDelete = (id) => {
        dispatch(deleteContact(id));
    };

    const onFilteredNames = () => {
        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchContact)
        )
    };
    
    const foundedContacts = onFilteredNames();

    return (
       <ul className={css.list}>
            {foundedContacts.map(contact => (
            <li className={css.list_item} key={contact.id}>
                <p className={css.list_name}>
                        <FiUser size={20} className={css.icon} />
                        {contact.name}: <span className={css.list_number}>{contact.number}</span>
                </p>
                <button
                    type="button"
                    onClick={onDelete}
                    className={css.list_btn}
                >
                Delete
                </button>
            </li>
            ))}
        </ul>
    );
}

export default ContactList;