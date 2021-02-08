import React from 'react';
import ExpCard from './ExpCard';
import ExperienceData from "./ExperienceData"
import WorkIcon from '@material-ui/icons/Work';
const Education = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center tcp"> <WorkIcon style={{ fontSize: 40 }} /><strong>My Experiences</strong></h1>
            </div>
            <section id="header" className="d-flex align-items-center bgp">

                <div className="container-fluid  mb-5 bgp">
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4 h-100 d-flex align-items-stretch">
                                {
                                    ExperienceData.map((val, ind) => {
                                        return <ExpCard key={ind}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            date={val.date}
                                            desig={val.desig}
                                            work={val.work}
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