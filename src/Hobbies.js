import React from 'react';
import Card from "./Card";
import HobbiesData from './HobbiesData';
const Hobbies
    = () => {
        return (
            <>

                <div className="container-fluid  mb-5 bgp">
                    <div className="row ">
                        <h1 className="text-center my-5"><strong>Hobbies
                </strong></h1>
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    HobbiesData.map((val, ind) => {
                                        return <Card key={ind}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                        />
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
export default Hobbies
    ;