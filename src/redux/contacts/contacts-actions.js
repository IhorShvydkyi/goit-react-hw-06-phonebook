import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add");

const deleteContact = createAction("contact/delete");

const filterContact = createAction("contact/changeFilter");

const contactsActions = { addContact, deleteContact, filterContact };

export default contactsActions;
