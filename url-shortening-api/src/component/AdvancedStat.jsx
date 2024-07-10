import '../style/AdvancedStat.css';
import recognition from '../images/icon-brand-recognition.svg';
import detailed from '../images/icon-detailed-records.svg';
import customizable from '../images/icon-fully-customizable.svg';
import DetailedBox from './DetailedBox';

function AdvancedStat(){
    return (
        <div className='AdvancedStat'>
            <div className='advanced-text-section'>
                <h2 className='advanced-title'>Advanced Statistics</h2>
                <p className='advanced-paragraph'>
                    Track how your links are performing across the web with
                    our advanced statistics dashboard.
                </p>
            </div>

            <div className='advanced-schema-section'>
                <DetailedBox icon={recognition} title='Brand Recogniton'>
                    Boost your brand recignition with
                    each click. Generic links don't mean a 
                    thing. Branded links help instil
                    confidence in your content.
                </DetailedBox>
                
                <DetailedBox icon={detailed} title='Detailed Records'>
                    Gain insights into who is clicking your
                    links. Knowing when and where
                    people engage with your content
                    helps inform better decisions.
                </DetailedBox>

                <DetailedBox icon={customizable} title='Fully Customizable'>
                    Improve brand awareness and 
                    content discoverability through
                    customizable link, supercharging
                    audience engagement.
                </DetailedBox>
                <div className='advanced-line'></div>
            </div>
        </div>
    );
}

export default AdvancedStat;