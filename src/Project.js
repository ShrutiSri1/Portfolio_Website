import React from 'react';
import ProjCard from "./ProjCard";
import ProjData from "./Projdata";
const Project = () => {
    return (
        <>
            <div className="my-5 mt-5">
                <h1 className="text-center  mt-5"><strong>Project</strong></h1>
            </div>
            <div className="container-fluid  mb-5">
                <div className="row ">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                ProjData.map((val, ind) => {
                                    return <ProjCard key={ind}
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
export default Project;