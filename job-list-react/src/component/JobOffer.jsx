import '../style/JobOffer.css';

function JobOffer({company, logo, position, postAt, contract, location, tools}){
    return (
        <div className='JobOffer'>
            <div className='left-section'>
                <img src={logo} alt='profile test'></img>
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
                <div className='job-info_tag'>Frontend</div>
                <div className='job-info_tag'>Senior</div>
                <div className='job-info_tag'>HTML</div>
            </div>
        </div>
    );
}

export default JobOffer;