import React from 'react';
import EduCard from './EduCard';
import EduData from "./EduData"
import SchoolIcon from '@material-ui/icons/School';
const Education = () => {
    return (
        <>
            <div className="my-5 ">
                <h1 className="text-center tcb"><SchoolIcon style={{ fontSize: 40 }} /><strong> My Education</strong></h1>
            </div>
            <div className="container-fluid  mb-5  p-2 mb-4 p-lg-2 mb-3 ">
                <div className="row ">
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

        </>
    )
}
export default Education;