import { List } from "./ContactListStyled";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import propTypes from "prop-types";
export const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <List>
      {filter
        ? contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ name, number, id }) => (
              <ContactsItem
                key={id}
                name={name}
                id={id}
                number={number}
                onDelete={onDelete}
              />
            ))
        : contacts.map(({ name, number, id }) => (
            <ContactsItem
              key={id}
              name={name}
              id={id}
              number={number}
              onDelete={onDelete}
            />
          ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  filter: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
