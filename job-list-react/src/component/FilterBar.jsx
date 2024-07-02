import '../style/FilterBar.css';
import deleteIcon from '../images/icon-remove.svg';

function FilterBar(){
    return (
        <div className='FilterBar'>
            <div className='filter-items'>
                <div className='filter-item'>
                <div className='filter-item_text'>
                    JavaScript
                </div>
                <div className='filter-item_delete-icon'>
                    <img className='delete-icon' src={deleteIcon} alt='Delete Icon'></img>
                </div>
                </div>

            </div>
            <div className='clear-btn'>Clear</div>
        </div>
    )
}

export default FilterBar;