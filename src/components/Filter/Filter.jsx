import PropTypes from 'prop-types';

const Filter = ({ value, onFilter }) => {
    return (
        <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={value}
            onChange={onFilter}
            required
          />
    )
}

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default Filter;