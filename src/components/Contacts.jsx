import PropTypes from 'prop-types';



export const Contacts = ({ contacts, deleteContact }) => {
    return <ul>{contacts.map(({ id, name, number}) =>
          (<li key={id}>
        <p>{name} : {number}</p>
        
        <button type="button" onClick={() => deleteContact(id)}> Delete</button>
          </li>
          ))}
          
        </ul> 
}


Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};
