import '../style/FilterBar.css';
import deleteIcon from '../images/icon-remove.svg';

function FilterBar({filterList, setFilterList}){

    function handleDeleteClick(e){
        let target = e.target.parentElement;
        // get the clicked item
        if(target.classList.contains('filter-item')){
            target = e.target.parentElement.textContent;
        }else if(target.classList.contains('filter-item_delete-icon')){
            target = e.target.parentElement.parentElement.textContent;
        }
        // update the filterList with removing the clicked item
        let updatedFilterList = filterList.filter((filterItem) => {
            return filterItem !== target;
        });

        setFilterList(updatedFilterList);
    }
    // clear all items in the filterList
    function handleClearClick(){
        setFilterList([]);
    }

    return (
        <div className='FilterBar'>
            <div className='filter-items'>
                {
                    filterList.map((filterItem, index) => {
                        return <div className='filter-item' key={index}>
                                    <div className='filter-item_text'>
                                        {filterItem}
                                    </div>
                                    <div className='filter-item_delete-icon' onClick={handleDeleteClick}>
                                        <img className='delete-icon' src={deleteIcon} alt='Delete Icon'></img>
                                    </div>
                                </div>
                    })
                }
            </div>
            <div className='clear-btn' onClick={handleClearClick}>Clear</div>
        </div>
    )
}

export default FilterBar;