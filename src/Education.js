import React from 'react';
import EduCard from './EduCard';
import EduData from "./EduData"
import SchoolIcon from '@material-ui/icons/School';
const Education = () => {
    return (
        <><section className="d-flex align-items-center  ">
            <div className="container-fluid  mb-5 bgw">
                <div className="row  my-5 py-10">
                    <div className="my- py-10 ">
                        <h1 className="text-center tcb my-5"><SchoolIcon style={{ fontSize: 40 }} /><strong> My Education</strong></h1>
                    </div>

                    <div className="col-10 mx-auto">
                        <div className="row gy-4 h-100 d-flex align-items-stretch">
                            {
                                EduData.map((val, ind) => {
                                    return <EduCard key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        date={val.date}
                                        subject={val.subject}
                                        percent={val.percent}
                                    />
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}
export default Education;