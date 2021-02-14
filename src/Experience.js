import React from 'react';
import ExpCard from './ExpCard';
import ExperienceData from "./ExperienceData"
import WorkIcon from '@material-ui/icons/Work';
const Education = () => {
    return (
        <>
            <hr className="my-5" />


            <section className="d-flex align-items-center bgp mt-2 mt-2 ">

                <div className="container-fluid  mb-5 ">
                    <div className="row ">
                        <div className="my-5 mx-auto ">

                            <h1 className="text-center mx-auto tcb my-5 "> <WorkIcon style={{ fontSize: 40 }} /><strong>My Experiences</strong></h1>
                        </div>
                        <div className="col-10 mx-auto bgp">
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