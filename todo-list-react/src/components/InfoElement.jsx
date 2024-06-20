import '../style/InfoElement.css';

function InfoElement(){
    return (
        <div className='InfoElement'>
            <div className='left-items'>
                5 items left
            </div>
            <div className='task-filter'>
                <p className='selected'>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            <div className='clear-completed'>
                Clear Completed
            </div>
        </div>
    );
}

export default InfoElement;