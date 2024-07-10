import '../style/DetailedBox.css';

function DetailedBox({icon, title, children}){
    return (
        <div className='DetailedBox'>
            <div className='schema-icon-box'>
                <img className='schema-icon' src={icon} alt={icon + 'Icon'} />
            </div>
            <h3 className='schema-title'>{title}</h3>
            <p className='schema-paragraph'>
                {children}
            </p>
        </div>
    );
}

export default DetailedBox;