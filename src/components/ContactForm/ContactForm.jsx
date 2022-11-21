import { useDispatch, useSelector } from 'react-redux';
import { BsPhoneFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import css from './ContactForm.module.css'
import { addContact } from '../../redux/contactsSlice';


const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onFormSubmit= (event) => {
    event.preventDefault();
    const field = event.target;
    const name = field.name.value;
    const number = field.number.value;
    if (contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    )) {
      return window.alert(`${name} is already in contacts !`);
    }
    dispatch(addContact(name, number));
    field.reset();
  };

return ( 
<form onSubmit={onFormSubmit}>
        <label className={css.label}>Name:
         <input className={css.input}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      /> 
        </label>
        <label className={css.label}>Number<BsPhoneFill size={20} className={css.icon}/>:
         <input className={css.input}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    /> 
        </label>
    <button type="submit" className={css.btn}><FaUserPlus size={20} className={css.btn_icon}/>Add contact</button>
    </form>
    );
}

export default ContactForm;