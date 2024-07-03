import '../style/JobOffer.css';

function JobOffer({company, logo, position, postAt, contract, location, role, level, languages, tools}){
    return (
        <div className='JobOffer'>
            <div className='left-section'>
                <img src={logo} alt='profile pic' />
                <div className='job-info'>
                    <div className='job-info_company'>
                        <p className='job-info_company-text'>{company}</p>
                        <div className='job-info_company-tags'>
                            <div className='job-info_company-tag-new'>NEW!</div>
                            <div className='job-info_company-tag-featured'>FEATURED</div>
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
                <div className='job-info_tag'>{role}</div>
                <div className='job-info_tag'>{level}</div>
                {languages.map((language) => {
                    return <div className='job-info_tag'>{language}</div>
                })}
                {tools.map((tool) => {
                    return <div className='job-info_tag'>{tool}</div>
                })
                }
            </div>
        </div>
    );
}

export default JobOffer;