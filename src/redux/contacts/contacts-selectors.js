export const getContacts = (state) => state.conatcts.items;
export const getFilter = (state) => state.conatcts.filter;
export const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
