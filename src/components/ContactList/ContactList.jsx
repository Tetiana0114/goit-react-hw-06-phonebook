import { useDispatch, useSelector } from 'react-redux';
import { FiUser } from "react-icons/fi";
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css'
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const searchName = useSelector(getFilter).toLowerCase().trim();

    const onDelete = e => {
        const id = e.target.id;
        dispatch(deleteContact(id));
    };

    const onFilteredNames = (contacts, searchName) => {
        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchName)
        )
    };
    
    const foundContacts = onFilteredNames(contacts, searchName);

    return (
       <ul className={css.list}>
            {foundContacts.map(contact => (
            <li className={css.list_item} key={contact.id}>
                <p className={css.list_name}>
                        <FiUser size={20} className={css.icon} />
                        {contact.name}: <span className={css.list_number}>{contact.number}</span>
                </p>
                <button
                    type="button"
                    onClick={onDelete}
                    className={css.list_btn}
                    id={contact.id}
                >
                Delete
                </button>
            </li>
            ))}
        </ul>
    );
}

export default ContactList;