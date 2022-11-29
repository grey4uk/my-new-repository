
import Section from 'components/Section';
import FormAddContact from 'components/FormAddContact';
import ContactsList from 'components/ContactsList';
import FilterInput from 'components/FilterInput';
import { useGetContactsQuery } from 'redux/contacts';

export default function PhonebookView() {
  const { isFetching } = useGetContactsQuery();

  return (
    <>
      <Section title="Add new contact:" isHidden={false}>
        <FormAddContact />
      </Section>

      <Section title="Contacts" isHidden={false}>
        {isFetching ? (
         <h1>loading...</h1>
        ) : (
          <FilterInput />
        )}

        <ContactsList />
      </Section>
    </>
  );
}
