import '../style/FilterSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function FilterSection(){
    return(
        <div className='FilterSection'>
            <div className='FilterSection___user-input-section'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input className='FilterSection___user-input' type='text' placeholder='Search for a country...' />
            </div>

            <select className="FilterSection___countries" id="country-filter">
                <option value="All">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}

export default FilterSection;