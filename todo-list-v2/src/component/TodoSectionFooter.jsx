import { useContext } from 'react';
import '../style/TodoSectionFooter.css';
import TodoContext from '../context/Todo.context';
import useLocalStorage from '../hook/useLocalStorage';

function TodoSectionFooter(){

    const {todoList, setTodoList, selectedFilter, setSelectedFilter} = useContext(TodoContext);
    const {setItem} = useLocalStorage('todoListStored');

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
        console.log(selectedFilter);

        // set 'filter-selected' class for the new selected filter
        filterList.forEach(filter => {
            if(filter.innerText === newSelectedFilter){
                filter.classList.add('filter-selected');
            }
        });
    }

    // clear all completed tasks
    function handleClearCompletedTask(){
        let copyList = [...todoList];
        let updatedList = copyList.filter(task => {
            return !task.completed
        });
        setTodoList(updatedList);
        setItem(updatedList);
    }

    return (
        <div className='TodoSectionFooter'>
            <div className='footer_items-left'>
                {todoList.length} items left
            </div>

            <div className='footer_filter'>
                <p onClick={handleChangeFilter} className='footer_filter-item filter-selected'>All</p>
                <p onClick={handleChangeFilter} className='footer_filter-item'>Active</p>
                <p onClick={handleChangeFilter} className='footer_filter-item'>Completed</p>
            </div>

            <div onClick={handleClearCompletedTask} className='footer_clear'>
                Clear Completed
            </div>
        </div>
    )
}

export default  TodoSectionFooter;