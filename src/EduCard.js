import React from 'react';

import DateRangeIcon from '@material-ui/icons/DateRange';
const EduCard = (props) => {
    return (
        <>


            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold"><strong>{props.title}</strong></h5>
                        <p className="card-text tcp"><DateRangeIcon />{props.date}</p>
                        <p className="card-text">{props.subject}</p>
                        <p className="card-text tcp"><strong>{props.percent}</strong></p>

                    </div>
                </div>
            </div>


        </>
    )
}
export default EduCard;