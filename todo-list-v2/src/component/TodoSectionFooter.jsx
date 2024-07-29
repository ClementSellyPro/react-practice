import { useState } from 'react';
import '../style/TodoSectionFooter.css';

function TodoSectionFooter(){

    const [selectedFilter, setSelectedFilter] = useState('All');

    function handleChangeFilter(e){
        let filterList = e.target.parentElement.childNodes;
        // reset 'filter-selected' class (color:blue)
        filterList.forEach(filter => {
            if(filter.classList.contains('filter-selected')){
                filter.classList.remove('filter-selected');
            }
        });

        // set new filter state
        let newSelectedFilter = e.target.innerText;
        setSelectedFilter(newSelectedFilter);

        // set 'filter-selected' class for the new selected filter
        filterList.forEach(filter => {
            if(filter.innerText === newSelectedFilter){
                filter.classList.add('filter-selected');
            }
        });
    }

    return (
        <div className='TodoSectionFooter'>
            <div className='footer_items-left'>
                5 items left
            </div>

            <div className='footer_filter'>
                <p onClick={handleChangeFilter} className='footer_filter-item filter-selected'>All</p>
                <p onClick={handleChangeFilter} className='footer_filter-item'>Active</p>
                <p onClick={handleChangeFilter} className='footer_filter-item'>Completed</p>
            </div>

            <div className='footer_clear'>
                Clear Completed
            </div>
        </div>
    )
}

export default  TodoSectionFooter;