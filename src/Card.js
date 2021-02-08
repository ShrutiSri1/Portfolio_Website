import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const Card = (props) => {
    return (
        <>


            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold tcp text-center"><strong>{props.title}</strong></h5>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Card;