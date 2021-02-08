import React from 'react';
import Card from "./Card";
import Sdata from "./SkillData";
const Skills = () => {
    return (
        <>



            <section className="d-flex align-items-center bgb">

                <div className="container-fluid  mb-5 bcp ">
                    <div className="row ">
                        <h1 className="text-center bgb tcp mb-5"><strong>Skills</strong></h1>
                        <div className="col-10 mx-auto">
                            <div className="row gy-4 h-100 d-flex align-items-stretch">
                                {
                                    Sdata.map((val, ind) => {
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

            </section>
        </>
    )
}
export default Skills;