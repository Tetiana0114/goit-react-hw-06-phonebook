import { useDispatch } from 'react-redux';
import css from './SearchField.module.css'
import { FaSearch } from "react-icons/fa";
import { setContactsFilter } from '../../redux/filterSlice';

const SearchField = () => {
    const dispatch = useDispatch();

    const handleFilter = event => {
    dispatch(setContactsFilter(event.target.value.toLowerCase()));
};
    return (
    <label className={css.label}><FaSearch size={20} className={css.icon}/> Find contacts by the name:
        <input className={css.input}
        type="text" 
        name="filter" 
        onChange={handleFilter} />
    </label>
        );
    }

export default SearchField;