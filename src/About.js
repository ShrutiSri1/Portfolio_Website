import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import profilepic from "../src/img/shruti.jpeg"
import { NavLink } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import Education from './Education';




function Home() {
    return (
        <>
            <section className="d-flex align-items-center bgb ">
                <div className="container-fluid ">
                    <div className="row my-5">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 " >

                                    <h2 className="my-5 tcp">
                                        <h1 className="tcw"><ReactTypingEffect className="typingeffect tcp" text={['Shruti Srivastava', 'Student']} speed={100} eraseDelay={700} />
                                        </h1>
                                    </h2>
                                    <div className="my-3">
                                        <p className="tcw">Hi I am Shruti and I am a Software Engineer.I want to secure a responsible career opportunity to fully utilize my training and skills, while making significant contribution to the success of the company. </p>
                                    </div>

                                </div>


                                <div className="col-lg-6 order-1 order-lg-2 header-img ml-5" >
                                    <img src={profilepic} className="img-fluid mx-auto" alt="profilepic" />
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <Education />

        </>
    )
}
export default Home;
