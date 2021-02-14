import React from 'react';
import { NavLink } from 'react-router-dom';
import DateRangeIcon from '@material-ui/icons/DateRange';
const Card = (props) => {
    return (
        <>


            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top img-fluid mt-30" alt="props.imgsrc" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold"><strong>{props.title}</strong></h5>
                        <p className="card-text "><strong>{props.desig}</strong></p>
                        <p className="card-text tcp"><DateRangeIcon />{props.date}</p>
                        <p className="card-text">{props.work}</p>


                    </div>
                </div>
            </div>


        </>
    )
}
export default Card;