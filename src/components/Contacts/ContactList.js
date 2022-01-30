import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import {
  ContactListStyled,
  ContactItem,
  Number,
  DeleteBtn,
} from "./ContactList.styled";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  // const contacts = useSelector((state) => {
  // 	const { filter, items } = state.contacts
  // 	const normalizedFilter = filter.toLowerCase()
  // 	const filteredContacts = items.filter((item) =>
  // 		item.name.toLowerCase().includes(normalizedFilter)
  // 	)
  // 	return filteredContacts
  // })

  const onDelete = (id) => dispatch(actions.deleteContact(id));

  return (
    <ContactListStyled>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <Number>{contact.name}:</Number>
          <Number>{contact.number}</Number>
          <DeleteBtn type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ContactListStyled>
  );
};

export default ContactsList;
