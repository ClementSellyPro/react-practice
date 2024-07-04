/**
 * Display all available jobs
 * @param {ComponentElement} children
 */
import '../style/JobList.css';

function JobList({children}){

    return (
        <div className='JobList'>
            {children}
        </div>
    )
}

export default JobList;