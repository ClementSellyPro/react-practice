import '../style/InfoElement.css';

function InfoElement({leftItems, filter, setFilter}){

    function handleFilterClick(e){
        let target = e.target;
        let listFilter = target.parentElement.childNodes;
        setFilter(target.innerHTML);
        // reset selected filter highlighting
        for(let i = 0; i < listFilter.length; i++){
            if(listFilter[i].classList.contains('selected')){
                listFilter[i].classList.remove('selected');
            }
        }
        target.classList.add('selected');
    }

    function handleClearClick(){
        alert('DILITE');
    }

    return (
        <div className='InfoElement'>
            <div className='left-items'>
                {leftItems} items left
            </div>
            <div className='task-filter'>
                <p onClick={handleFilterClick} className='selected'>All</p>
                <p onClick={handleFilterClick}>Active</p>
                <p onClick={handleFilterClick}>Completed</p>
            </div>
            <div onClick={handleClearClick} className='clear-completed'>
                Clear Completed
            </div>
        </div>
    );
}

export default InfoElement;