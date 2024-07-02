import '../style/JobOffer.css';
import profileTest from "../images/photosnap.svg";

function JobOffer(){
    return (
        <div className='JobOffer'>
            <div className='left-section'>
                <img src={profileTest} alt='profile test'></img>
                <div className='job-info'>
                    <div className='job-info_company'>
                        <p className='job-info_company-text'>Photosnap</p>
                        <div className='job-info_company-tags'>
                            <div className='job-info_company-tag-new'>NEW!</div>
                            <div className='job-info_company-tag-featured'>FEATURED</div>
                        </div>
                    </div>
                    <div className='job-info_offer-title'>
                        Fullstack Developer
                    </div>
                    <div className='job-info_details'>
                        <div className='job-info_detail'>1d ago</div><div className="separator">.</div>
                        <div className='job-info_detail'>Full Time</div><div className="separator">.</div>
                        <div className='job-info_detail'>USA only</div>
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