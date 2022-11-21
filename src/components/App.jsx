import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchField from 'components/SearchField';

export const App = () => {
return (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      color: '#010101'
    }}
  >
<Section title="Phonebook:">
<ContactForm />
</Section>
<Section title="Contacts:">
<SearchField />
<ContactList />
</Section>
  </div>
);
}