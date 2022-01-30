import Container from "./components/Container/Container";
import { Title } from "./App.styled";
import Form from "./components/Form/Form";
// import Filter from './components/Filter/Filter'
// import ContactList from './components/Contacts/ContactList'

export default function App() {
  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        {/* <ContactList /> */}
      </Container>
    </>
  );
}
