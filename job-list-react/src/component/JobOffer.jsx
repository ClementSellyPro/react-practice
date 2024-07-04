/**
 * Job offer component
 * @param {Array} filterList
 * @param {function} setFilterList
 * @param {Array} tools
 * @param {Array} languages
 * @param {string} company
 * @param {string} logo
 * @param {string} position
 * @param {string} postAt
 * @param {string} contract
 * @param {string} location
 * @param {string} role
 * @param {string} level
 * @param {boolean} feqtured
 */
import '../style/JobOffer.css';

function JobOffer({ filterList, setFilterList, company, logo, position, 
                    postAt, contract, location, 
                    role, level, languages, tools, featured}){
    
    let index = 0;

    function handleFilterClick(e){
        let target = e.target.innerText;

        if(!filterList.includes(target)){
            let updatedFilterList = [...filterList, target];
            setFilterList(updatedFilterList);
        }
        
    }
    
    return (
        <div className='JobOffer'>
            <div className='left-section'>
                <img src='../images/manage.svg' alt='profile pic' />
                <div className='job-info'>
                    <div className='job-info_company'>
                        <p className='job-info_company-text'>{company}</p>
                        <div className='job-info_company-tags'>
                            {(postAt === '1d ago') ? <div className='job-info_company-tag-new'>NEW!</div> : null}
                            {(postAt === '2d ago') ? <div className='job-info_company-tag-new'>NEW!</div> : null}
                            
                            {(featured) ? <div className='job-info_company-tag-featured'>FEATURED</div> : null}
                        </div>
                    </div>
                    <div className='job-info_offer-title'>
                        {position}
                    </div>
                    <div className='job-info_details'>
                        <div className='job-info_detail'>{postAt}</div><div className="separator">.</div>
                        <div className='job-info_detail'>{contract}</div><div className="separator">.</div>
                        <div className='job-info_detail'>{location}</div>
                    </div>
                </div>
            </div>

            <div className='job-info_tags'>
                <div className='job-info_tag' onClick={handleFilterClick}>{role}</div>
                <div className='job-info_tag' onClick={handleFilterClick}>{level}</div>
                {languages.map((language) => {
                    return <div key={index++} className='job-info_tag' onClick={handleFilterClick}>{language}</div>
                })}
                {tools.map((tool) => {
                    return <div key={index++} className='job-info_tag' onClick={handleFilterClick}>{tool}</div>
                })
                }
            </div>
        </div>
    );
}

export default JobOffer;